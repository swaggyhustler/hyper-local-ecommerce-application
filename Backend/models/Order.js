import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    // products: {
    //     type: mongoose.Schema.Types.Array,
    //     required: true
    // }
    product: {
        type: Object
    }
}, {timestamps: true});

export default mongoose.model('Orders', orderSchema);