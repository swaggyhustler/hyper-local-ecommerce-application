import express from 'express';
import shopRoutes from './routes/shopRoutes.js';
import cors from 'cors';
import { connectDB } from './config/db.js';
const app=express();

connectDB();

app.use(cors());
app.use(express.json());
app.use('/', shopRoutes);

app.listen(5000, ()=>{
    console.log(`Server running on PORT ${5000}`);
});