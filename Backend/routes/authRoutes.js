import express from 'express';
import { login, registerUser, registerOwner } from '../controllers/authController.js'; 

const router = express.Router()

router.post('/login', login);
router.post('/register/user', registerUser);
router.post('/register/owner', registerOwner);

export default router;