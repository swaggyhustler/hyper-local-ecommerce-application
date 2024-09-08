import express from 'express';
import shopRoutes from './routes/shopRoutes.js';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();
const app=express();

await connectDB();

app.use(cors({
    options: '*'
}));
app.use(express.json());
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1', shopRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{
    console.log(`Server running on PORT ${PORT}`);
});