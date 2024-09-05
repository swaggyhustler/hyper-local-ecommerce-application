import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
    shop_id: {
        type: mongoose.Types.ObjectId,
        ref: "Shops",
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

export default mongoose.model('Locations', locationSchema);