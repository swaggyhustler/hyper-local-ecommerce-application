import Shop from '../models/Shop.js';
import Products from '../models/Product.js';
import {uploadImage} from '../utils/uploadImage.js';

const addShop = async (req, res)=>{
    try{
        // console.log(req.file);
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
        const data = await Shop.find({
            geometry: {
                $near: {
                        $geometry: { type: "Point",  coordinates },
                        $minDistance: 0,
                        $maxDistance: 5000
                    }
                }
        }, {_id: 1});

        const ids = data.map(id=>id._id);
        const products = await Products.find({shop_id: {$in: ids} });
        const regex = new RegExp(keyword, 'i');

        const result = products.filter(product => 
            regex.test(product.name) || regex.test(product.description)
        );

        res.status(200).json({message: "Products fetched successfully", success: true, data: result});    
    }catch(error){
        console.log("Cannot perform Search Operation on Products");
        res.status(200).json({message: "Cannot perform Search Operation on Products", success: false});
    }
}


export {addShop, addProduct, searchProduct};