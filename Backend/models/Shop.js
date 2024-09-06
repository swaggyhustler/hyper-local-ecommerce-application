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
    },
    type: {
        type: String,
        default: "Feature"
    },
    properties: {
        description: String,
        icon: String
    },
    geometry: {
        type:{
            type: String,
            enum: ['Point'],
            default: 'Point'
        },
        coordinates:{
            type: [Number],
            index: '2dsphere'
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Shops', shopSchema);