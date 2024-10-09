import mongoose from "mongoose";
const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    poster_url: {
      type: String,
    },
    description: {
      type: String,
    },
    registration_link: {
      type: String,
    },
    venue: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
      default: "Update Soon",
    },
    time: {
      type: String,
      required: true,
      default: "Update Soon",
    },
    is_registration_open: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      enum: ["upcoming", "previous"],
      default: "upcoming",
    },
    event_url: {
      type: String,
    },
    wp_grp_url: {
      type: String,
    },
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);

export default Event;
