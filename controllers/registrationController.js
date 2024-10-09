import Registration from '../models/RegistrationModel.js';
import Event from '../models/EventModel.js';
import { addToQueue } from '../services/queueService.js'; // Import queue service

// Register a user for an event
export const registerForEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.eventId);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        if (!event.is_registration_open) {
            return res.status(400).json({ message: 'Registration is closed for this event' });
        }

        const randomString = Math.random().toString(36).substring(2, 8).toUpperCase();
        const ticket_id = `CCC${randomString}`;
        const registration = new Registration({
            event_id: req.params.eventId,
            name: req.body.name,
            email: req.body.email,
            registration_details: req.body.registration_details,
            ticket_id: ticket_id
        });

        await registration.save();

        // Prepare email details
        const emailDetails = {
            email: req.body.email,
            name: req.body.name,
            event_name: event.title,
            ticket: ticket_id,
            event_url: event.event_url, // Assuming event model has a URL field
            wp_grp_url: event.wp_grp_url // Assuming event model has a WhatsApp group URL field
        };

        // Add email to queue
        addToQueue(emailDetails);

        res.status(201).json({ message: 'Registration successful', registration });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all registrations for an event
export const getRegistrationsForEvent = async (req, res) => {
    try {
        const registrations = await Registration.find({ event_id: req.params.eventId });
        if (!registrations || registrations.length === 0) {
            return res.status(404).json({ message: 'No registrations found for this event' });
        }
        res.status(200).json(registrations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
