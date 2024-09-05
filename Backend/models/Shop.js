import mongoose from 'mongoose';

const shopSchema = new mongoose.Schema({
    shopName: {
        type: String,
        required: true
    },
    owner_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Users',
        required: true
    }
});

export default mongoose.model('Shops', shopSchema);