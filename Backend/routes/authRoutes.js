import express from 'express';
import { login, registerUser, registerOwner, logout, checkAuth, verifyEmail } from '../controllers/authController.js'; 
import { verifyToken } from '../middlewares/verifyToken.js';

const router = express.Router();

router.get('/check-auth', verifyToken, checkAuth);
router.post('/login', login);
router.post('/register/user', registerUser);
router.post('/register/owner', registerOwner);
router.get('/logout', logout);
router.post('/verify-email', verifyEmail);

export default router;