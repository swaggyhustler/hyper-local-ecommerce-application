import express from 'express';
import shopRoutes from './routes/shopRoutes.js';
import authRoutes from './routes/authRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import payments from "./payments.js"

dotenv.config();
const app=express();

await connectDB();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(cookieParser());
app.use(express.json());
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1', shopRoutes);
app.use('/api/v1', orderRoutes);
app.use("/payment",payments)


const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{
    console.log(`Server running on PORT ${PORT}`);
});