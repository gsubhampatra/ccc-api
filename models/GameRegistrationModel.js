// models/GameRegistration.js
import mongoose from 'mongoose';

const gameRegistrationSchema = new mongoose.Schema({
  event_name: String,
  leader_name: String,
  leader_id: String,
  email: String,
  contact: String,
  team: String,
  player_1: String,
  player_2: String,
  player_3: String,
  player_1_id: String,
  player_2_id: String,
  player_3_id: String,
  ticket: String
});

export default mongoose.model('GameRegistration', gameRegistrationSchema);
