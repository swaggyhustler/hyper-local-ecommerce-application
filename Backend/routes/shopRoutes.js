import express from 'express';
import { addShop, addProduct } from '../controllers/shopController.js';
import { getNearestShops } from '../controllers/distanceController.js';
const router=express.Router();

router.post('/add/shop', addShop);
router.post('/add/product', addProduct);
router.get('/get/nearestShops', getNearestShops);

export default router;