import express from 'express';
import shopRoutes from './routes/shopRoutes.js';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors';
import { connectDB } from './config/db.js';
const app=express();

await connectDB();

app.use(cors({
    options: '*'
}));
app.use(express.json());
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1', shopRoutes);

app.listen(5000, ()=>{
    console.log(`Server running on PORT ${5000}`);
});