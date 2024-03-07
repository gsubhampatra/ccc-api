
// routes/registrationRoutes.js
import express from 'express';
import { RegisterEvent, clearGameRegistrations, clearRegistrations, gameRegistration, getGameRegistrations, getRegisteredEvents } from '../controllers/registerEvent.js';

const router = express.Router();

//other registrations
router.get("/event-register", getRegisteredEvents);
router.post("/event-register", RegisterEvent);
router.delete("/event-register", clearRegistrations);

// GET all registrations
router.get('/game-br',getGameRegistrations );
router.post('/game-br',gameRegistration);
router.delete('/game-br',clearGameRegistrations);

export default router;
