import mongoose from 'mongoose';

const shopSchema = new mongoose.Schema({
    shopName: {
        type: String,
        required: true
    }
});

export default mongoose.model('Shops', shopSchema);