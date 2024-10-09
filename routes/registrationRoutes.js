import express from 'express';
import {
    registerForEvent,
    getRegistrationsForEvent
} from '../controllers/registrationController.js';

const router = express.Router();

// Registration routes
router.post('/:eventId/register', registerForEvent);
router.get('/:eventId/registrations', getRegistrationsForEvent);

export default router;
