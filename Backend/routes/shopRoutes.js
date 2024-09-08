import express from 'express';
import { upload } from '../middlewares/multer.js';
import { addShop, addProduct } from '../controllers/shopController.js';
import { getNearestShops } from '../controllers/distanceController.js';

const router=express.Router();

router.post('/add/shop', upload.single('image'), addShop);
router.post('/add/product', addProduct);
router.get('/get/nearestShops', getNearestShops);

export default router;