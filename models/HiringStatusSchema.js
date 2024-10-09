import mongoose from "mongoose";
const hiringStatusSchema = new mongoose.Schema({
    isHiringEnabled: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

const HiringStatus = mongoose.model('HiringStatus', hiringStatusSchema);

export default HiringStatus;