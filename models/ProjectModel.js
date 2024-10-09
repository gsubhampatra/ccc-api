import mongoose from 'mongoose';
const projectSchema = new mongoose.Schema({
    member_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Member',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    github_link: {
        type: String,
    },
    live_demo_link: {
        type: String,
    },
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);

export default Project;