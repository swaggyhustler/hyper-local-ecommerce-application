import express from 'express';
import { addOrder, getOrders } from '../controllers/orderController.js';

const router = express.Router();

router.post('/add/order', addOrder);
router.get('/get/orders/:user_id', getOrders);

export default router;