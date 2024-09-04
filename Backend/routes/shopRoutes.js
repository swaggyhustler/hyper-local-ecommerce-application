import express from 'express';
import { addShop, addProduct } from '../controllers/shopController.js';
const router=express.Router();

router.post('/add/shop', addShop);
router.post('/add/product', addProduct);

export default router;