import express from 'express';
import { upload } from '../middlewares/multer.js';
import { addShop, addProduct, searchProduct } from '../controllers/shopController.js';
import { getNearestShops } from '../controllers/distanceController.js';

const router=express.Router();

router.post('/add/shop', upload.single('image'), addShop);
router.post('/add/product', upload.single('image'), addProduct);
router.post('/get/nearestShops', getNearestShops);
router.post('/search/product', searchProduct);

export default router;