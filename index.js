// Import required modules
import express from "express";
import cors from "cors";
import { getPosts } from "./controllers/rssController.js";
import {
  RegisterEvent,
  clearRegistrations,
  getRegisteredEvents,
} from "./controllers/registerEvent.js";
import registrationRoutes from "./routes/registrationRoutes.js";

const DBURI = "mongodb+srv://subhampatradev:ccc@cccdb.vwxznl2.mongodb.net/";
// Connect to MongoDB
import mongoose from "mongoose";

(async () => {
  try {
    const conn = await mongoose.connect(DBURI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
})();

// Initialize Express app
const app = express();
const port = 5000;

// Enable CORS
app.use(cors());

// Define middleware to parse JSON requests
app.use(express.json());

app.use("/api",registrationRoutes)

// Define endpoint handler
app.get("/api/medium-posts/:usermedium", getPosts);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
