import express from 'express';
import { upload } from '../middlewares/multer.js';
import { addShop, addProduct, searchProduct, getProducts, getShopsByOwner } from '../controllers/shopController.js';
import { getNearestShops } from '../controllers/distanceController.js';

const router=express.Router();

router.post('/add/shop', upload.single('image'), addShop);
router.post('/add/product', upload.single('image'), addProduct);
router.post('/get/nearestShops', getNearestShops);
router.get('/products/:shopID', getProducts);
router.post('/search/product', searchProduct);
router.get('/get/shops/:owner_id', getShopsByOwner);

export default router;