import express from 'express';
import {
    createAchievement,
    getAchievements,
    addGalleryImage,
    getGallery,
    deleteGalleryImage,
    addWinner,
    getWinnersByEvent,
    getHiringStatus,
    updateHiringStatus,
} from '../controllers/adminController.js';

const router = express.Router();

// Achievements routes
router.post('/achievements', createAchievement); // Create achievement
router.get('/achievements', getAchievements); // Get all achievements

// Gallery routes
router.post('/gallery', addGalleryImage); // Add gallery image
router.get('/gallery', getGallery); // Get all gallery images
router.delete('/gallery/:id', deleteGalleryImage); // Delete gallery image

// Winners routes
router.post('/winners', addWinner); // Add winner
router.get('/winners/event/:eventId', getWinnersByEvent); // Get winners for a specific event

// Hiring status routes
router.get('/hiring-status', getHiringStatus); // Get current hiring status
router.put('/hiring-status', updateHiringStatus); // Update hiring status

export default router;
