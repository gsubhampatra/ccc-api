import Achievement from '../models/AchievementModel.js';
import Gallery from '../models/GalleryModel.js';
import Winner from '../models/WinnerModel.js';
import HiringStatus from '../models/HiringStatusSchema.js';

// ------------------ Achievements ------------------

// Create an achievement
export const createAchievement = async (req, res) => {
    try {
        const achievement = new Achievement(req.body);
        await achievement.save();
        res.status(201).json(achievement);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all achievements
export const getAchievements = async (req, res) => {
    try {
        const achievements = await Achievement.find();
        res.status(200).json(achievements);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ------------------ Gallery ------------------

// Add an image to the gallery
export const addGalleryImage = async (req, res) => {
    try {
        const galleryImage = new Gallery(req.body);
        await galleryImage.save();
        res.status(201).json(galleryImage);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all gallery images
export const getGallery = async (req, res) => {
    try {
        const gallery = await Gallery.find();
        res.status(200).json(gallery);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a gallery image by ID
export const deleteGalleryImage = async (req, res) => {
    try {
        const image = await Gallery.findByIdAndDelete(req.params.id);
        if (!image) {
            return res.status(404).json({ message: 'Image not found' });
        }
        res.status(200).json({ message: 'Image deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ------------------ Event Winners ------------------

// Add a winner for an event
export const addWinner = async (req, res) => {
    try {
        const winner = new Winner(req.body);
        await winner.save();
        res.status(201).json(winner);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all winners for an event
export const getWinnersByEvent = async (req, res) => {
    try {
        const winners = await Winner.find({ event_id: req.params.eventId });
        res.status(200).json(winners);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ------------------ Hiring Status ------------------

// Get current hiring status
export const getHiringStatus = async (req, res) => {
    try {
        const status = await HiringStatus.findOne();
        res.status(200).json(status);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update hiring status
export const updateHiringStatus = async (req, res) => {
    try {
        const status = await HiringStatus.findOneAndUpdate({}, { is_hiring_open: req.body.is_hiring_open }, { new: true, upsert: true });
        res.status(200).json(status);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
