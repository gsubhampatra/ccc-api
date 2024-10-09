import express from 'express';
import {
    createMember,
    getAllMembers,
    getMemberById,
    updateMember,
    deleteMember,
    getAlumniMembers,
    getCurrentMembers
} from '../controllers/memberController.js';

const router = express.Router();

// Create a new member
router.post('/', createMember);

// Get all members
router.get('/', getAllMembers);

// Get a specific member by ID
router.get('/:id', getMemberById);

// Update a member by ID
router.put('/:id', updateMember);

// Delete a member by ID
router.delete('/:id', deleteMember);

// Get all alumni members
router.get('/alumni', getAlumniMembers);

// Get all current members
router.get('/current', getCurrentMembers);

export default router;
