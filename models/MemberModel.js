import mongoose from "mongoose";
const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
    },
    linkedin: {
        type: String,
    },
    github: {
        type: String,
    },
    profile_photo: {
        type: String,
    },
    type: {
        type: String,
        enum: ['member', 'alumni'],
        default: 'member',
    },
    batch: {
        type: String,
    },
    designation: {
        type: String,
        default:"Core Member"
    },
}, { timestamps: true });

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;
