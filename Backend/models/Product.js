import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    shop_id:{
        type: mongoose.Types.ObjectId,
        ref: 'Shops',
        required: true
    },
    description: {
        type: String
    },
    image_url:{
        type: String
    }
});

export default mongoose.model('Products', productSchema);