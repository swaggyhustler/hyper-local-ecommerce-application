import mongoose from 'mongoose';

const ownerSchema = new mongoose.Schema({
    owner_name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    bank_name: {
        type: String,
        required: true
    },
    bank_account_no: {
        type: Number,
        required: true,
        unique: true
    },
    bank_IFSC_code: {
        type: String,
        unique: true
    },
    role: {
        type: String,
        enum: ['owner']
    }
}, {timestamps: true});

export default mongoose.model('Owners', ownerSchema);