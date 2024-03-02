import mongoose from "mongoose";

const RegisterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      
    },
    email: {
      type: String,
    
    },
    branch: {
      type: String,
   
    },
    batch: {
      type: String,
     
    },
    rollno: {
      type: String,
     
    },
    contact: {
      type: String,
   
    },
    section: {
      type: String,
     
    },
    event_name: {
      type: String,
      
    },
    ticket: {
      type: String,
    },
  },
  { timestamps: true }
);

const RegisterModel = mongoose.model("Register", RegisterSchema);

export default RegisterModel;