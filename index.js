// Import required modules
import express from 'express';
import cors from 'cors';
import { getPosts } from './controllers/rssController.js';

// Initialize Express app
const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Define middleware to parse JSON requests
app.use(express.json());

// Define endpoint handler
app.get('/api/medium-posts/:usermedium',getPosts );

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});






