import RegisterModel from "../models/RegisterModel.js";
import GameRegistration from "../models/GameRegistrationModel.js";
import { sendMail } from "../utils/sendMail.js";
const RegisterEvent = async (req, res) => {
  const {
    email,
    name,
    branch,
    batch,
    rollno,
    ticket,
    contact,
    section,
    event_name,
    event_url,
    wp_grp_url,
  } = req.body;


 
  
  try {
    const data = await RegisterModel.create({
      email,
      name,
      branch,
      batch,
      rollno,
      ticket,
      contact,
      section,
      event_name,
    });
    
    if (!data) {
      return res.status(400).json({ message: "Error in registration" });
    }
    
    await sendMail(email,name,event_name,ticket,event_url,wp_grp_url)
    res
    .status(200)
    .json({ success: true, message: "Registration successful", data });
    
    
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
};

const getRegisteredEvents = async (req, res) => {
  try {
    const data = await RegisterModel.find({});
    if (!data) {
      return res.status(400).json({ message: "No registrations found" });
    }
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Error fetching registrations" });
  }
};

const clearRegistrations = async (req, res) => {
  try {
    await RegisterModel.deleteMany({});
    res.status(200).json({ message: "Registrations cleared" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Error clearing registrations" });
  }
}

const gameRegistration = async (req, res) => {
  const {
    event_name,
    leader_name,
    leader_id,
    email,
    contact,
    team,
    player_1,
    player_2,
    player_3,
    player_1_id,
    player_2_id,
    player_3_id,
    ticket,
  } = req.body;
  try {
    const data = await GameRegistration.create({
      event_name,
      leader_name,
      leader_id,
      email,
      contact,
      team,
      player_1,
      player_2,
      player_3,
      player_1_id,
      player_2_id,
      player_3_id,
      ticket,
    });
    if (!data) {
      return res.status(400).json({ message: "Error in registration" });
    }
    res.status(200).json({ success: true, message: "Registration successful", data });
    
    await sendMail(email,leader_name,event_name,ticket)

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Error in registration" });
  }
};

const getGameRegistrations = async (req, res) => {
  try {
    const data = await GameRegistration.find({});
    if (!data) {
      return res.status(400).json({ message: "No registrations found" });
    }
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Error fetching registrations" });
  }
}

const clearGameRegistrations = async (req, res) => {
  try {
    await GameRegistration.deleteMany({});
    res.status(200).json({ message: "Registrations cleared" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Error clearing registrations" });
  }
}



export { RegisterEvent, getRegisteredEvents,clearRegistrations, gameRegistration, getGameRegistrations,clearGameRegistrations};
