// Import required modules
import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

// Import route files
import adminRoutes from "./routes/adminRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import memberRoutes from "./routes/memberRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import registrationRoutes from "./routes/registrationRoutes.js";
import authMiddleware from "./middleware/authMiddleware.js";

const DBURI = process.env.DB_URI;
const DBNAME = process.env.DB_NAME || "cccdb";
// Connect to MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(DBURI, {
      dbName: DBNAME,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Initialize Express app
const app = express();
const port = process.env.PORT || 5000;

// Enable CORS
app.use(
  cors({
    origin: "*",
  })
);

// Middleware to parse JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to CCC API");
});

app.use("/api", authMiddleware); // Apply middleware to all routes under /api

// Define routes
app.use("/api/admin", adminRoutes); // Admin Routes (Achievement, Gallery, Winners, Hiring)
app.use("/api/events", eventRoutes); // Event Routes (CRUD for Events)
app.use("/api/members", memberRoutes); // Member Routes (CRUD for Members)
app.use("/api/projects", projectRoutes); // Project Routes (CRUD for Projects)
app.use("/api/registrations", registrationRoutes); // Registration Routes (Event Registrations)

// Start the server
app.listen(port, async () => {
  await connectDB();
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
