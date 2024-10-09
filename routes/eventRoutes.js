import express from 'express';
import {
    createEvent,
    getAllEvents,
    updateEvent,
    deleteEvent,
    getEventByURL
} from '../controllers/eventController.js';

const router = express.Router();

// Event routes

// Create a new event
router.post('/', createEvent);  // POST /api/events

// Get all events
router.get('/', getAllEvents);  // GET /api/events

// Get an event by its URL slug
router.get('/:eventUrl', getEventByURL);  // GET /api/events/:eventUrl

// Update an event by its ID
router.put('/:id', updateEvent);  // PUT /api/events/:id

// Delete an event by its ID
router.delete('/:id', deleteEvent);  // DELETE /api/events/:id

export default router;
