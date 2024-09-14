import mongoose from 'mongoose';

const shopSchema = new mongoose.Schema({
    shopName: {
        type: String,
        required: true
    },
    owner_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Owners',
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
    image_url: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Shops', shopSchema);