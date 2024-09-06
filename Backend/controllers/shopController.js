import Shop from '../models/Shop.js';
import Products from '../models/Product.js';

const addShop = async (req, res)=>{
    try{
        const {shopName, coordinates, owner_id} = req.body;
        const newShop = await Shop.create({owner_id, shopName, properties: {description: shopName, icon: 'https://apis.mapmyindia.com/map_v3/1.png'}, geometry: {coordinates}});
        newShop.save();
        res.status(201).json({message: 'Shop Registered Successfully', success: true});
    }catch(error){
        console.log(error);
        res.status(500).json({message: 'Cannot create a new Shop!', success: false})
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