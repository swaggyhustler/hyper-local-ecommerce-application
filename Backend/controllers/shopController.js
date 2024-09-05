import Shop from '../models/Shop.js';
import Products from '../models/Product.js';
import Location from '../models/Location.js';

const addShop = async (req, res)=>{
    try{
        const {shopName, coordinates} = req.body;
        const newShop = await Shop.create({shopName});
        newShop.save();
        const newLoc = await Location.create({shop_id: newShop._id, properties: {description: shopName, icon: 'https://apis.mapmyindia.com/map_v3/1.png'}, geometry: {coordinates}});
        newLoc.save();
        res.status(201).json({message: 'Shop Registered Successfully'});
    }catch(error){
        console.log(error);
        res.status(500).json({message: 'Cannot create a new Shop!'})
    }
}

const addProduct = async (req, res)=>{
    try{
        const {name, price, shop_id, description} = req.body;
        const newProduct = await Products.create({name, price, shop_id, description});
        newProduct.save();
        res.status(201).json({message: 'Product added to the shop successfully'});
    }catch(error){
        console.log("Cannot add Product to the shop", error);
        res.status(500).json({message: "Cannot add Product to the Shop"});
    }
}

export {addShop, addProduct};