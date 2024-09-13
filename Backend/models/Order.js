import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products'
    }
}, {timestamps: true});

export default mongoose.model('Orders', orderSchema);