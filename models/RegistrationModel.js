import mongoose from "mongoose";
const registrationSchema = new mongoose.Schema(
  {
    event_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    registraion_details: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
    registered_at: {
      type: Date,
      default: Date.now,
    },
    ticket_id: {
      type: String,
    },
  },
  { timestamps: true }
);

const Registration = mongoose.model("Registration", registrationSchema);

export default Registration;
