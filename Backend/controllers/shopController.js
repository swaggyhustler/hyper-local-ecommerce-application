import Shop from '../models/Shop.js';
import Products from '../models/Product.js';
import {uploadImage} from '../utils/uploadImage.js';
import { generateToken } from '../utils/mapplsToken.js';
import axios from 'axios';

const addShop = async (req, res)=>{
    try{
        const image_url = await uploadImage(req.file);
        const {shopName, coordinates, owner_id} = req.body;
        const modifiedCoords = coordinates.split(',');
        const newShop = await Shop.create({image_url, owner_id, shopName, properties: {description: shopName, icon: 'https://apis.mapmyindia.com/map_v3/1.png'}, geometry: {coordinates: modifiedCoords}});
        newShop.save();
        res.status(201).json({message: 'Shop Registered Successfully', success: true, data: newShop});
    }catch(error){
        console.log(error);
        res.status(500).json({message: 'Cannot create a new Shop!', success: false})
    }
}

const addProduct = async (req, res)=>{
    try{
        const image_url = await uploadImage(req.file);
        const {name, price, shop_id, description} = req.body;
        const newProduct = await Products.create({image_url, name, price, shop_id, description});
        newProduct.save();
        res.status(201).json({message: 'Product added to the shop successfully', success: true, data: newProduct});
    }catch(error){
        console.log("Cannot add Product to the shop", error);
        res.status(500).json({message: "Cannot add Product to the Shop"});
    }
}

const searchProduct = async (req, res)=>{
    try{
        console.log(req.body)
        const {coordinates, keyword} = req.body;
        const shops = await Shop.find({
            geometry: {
                $near: {
                        $geometry: { type: "Point",  coordinates },
                        $minDistance: 0,
                        $maxDistance: 5000
                    }
                }
        });

        const ids = shops.map(item=>item._id);
        const products = await Products.find({shop_id: {$in: ids} });
        const regex = new RegExp(keyword, 'i');

        const result = products.filter(product => 
            regex.test(product.name) || regex.test(product.description)
        );

        shops.unshift({
            properties:{description: 'Current Location'},
            geometry:{coordinates: coordinates}
        });

        const destinations = shops.map((item)=>{
            return (
                `${item.geometry.coordinates[1]},${item.geometry.coordinates[0]};`
            )
        });

        let query = "";
        let i=destinations.length-1;

        destinations.forEach((item, index)=>{
            if(index==i)
                query+=item.substring(0,item.length-2);
            else
                query+=item;    
                
        });

        const token = await generateToken();
        console.log("**********API is being hit from the frontend*********");
        const metaData = await axios.get(`https://apis.mappls.com/advancedmaps/v1/${token}/distance_matrix/biking/${query}`);
        shops.shift();
        let finalData={};
        shops.forEach((item, index)=>{
                finalData[item._id]={
                    'owner_id': item.owner_id,
                    'shopName': item.properties.description,
                    'distance': (metaData.data.results.distances[0][index]/1000).toFixed(2),
                    'duration': (metaData.data.results.durations[0][index]/60).toFixed(2),
                }
        });

        result.forEach((item, index)=>{
            result[index]={
                ...item._doc,
                'distance': finalData[item.shop_id].distance,
                'shopName': finalData[item.shop_id].shopName
            }
        });

        res.status(200).json({message: "Products fetched successfully", success: true, data: result});    
    }catch(error){
        console.log("Cannot perform Search Operation on Products");
        console.log(error);
        res.status(200).json({message: "Cannot perform Search Operation on Products", success: false});
    }
}

const getProducts = async (req, res)=>{
    try{
        const products = await Products.find({shop_id: req.params.shopID});
        res.send({message: "Products related to shop fetched successfully", success: true, data: products});
    }catch(error){
        res.send({message: "Cannot fetch products from the shop", success: false});
    }
}

const getShopsByOwner = async (req, res)=>{
    const {owner_id} = req.params;
    try{
        const shops = await Shop.find({owner_id});
        res.status(200).json({message: "Shops associated to owner fetched successfully", success: true, data: shops});
    }catch(error){
        console.log("Cannot fetch shops associated to owner");
        res.status(500).json({message: "Cannot fetch shops associated to owner", success: false});
    }
}

const deleteProduct = async (req, res)=>{
    const {product_id} = req.params;
    try{
        await Products.deleteOne({_id: product_id});
        res.status(200).json({message: "Product Deleted Successfully", success: true});
    }catch(error){
        console.log("Cannot delete the product");
        res.status(500).json({message: "Cannot delete the product", success: true})
    }
}

export {addShop, addProduct, searchProduct, getProducts, getShopsByOwner, deleteProduct};
