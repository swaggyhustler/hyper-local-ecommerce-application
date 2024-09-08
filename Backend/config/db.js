import mongoose from 'mongoose';

const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Database connected to host ${conn.connection.host}`);
    }catch(error){
        console.log('Cannot connect to Database\n', error);
    }
}

export { connectDB };