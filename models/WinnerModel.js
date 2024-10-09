import mongoose from "mongoose";
const winnerSchema = new mongoose.Schema({
    event_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true,
    },
    winner_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Registration',
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    description:{
        type:String,
    },
    is_show:{
        type:Boolean,
        default:true
    }
}, { timestamps: true });

const Winner = mongoose.model('Winner', winnerSchema);

export default Winner;