import express from 'express';
import {
    createProject,
    getAllProjects,
    getProjectById,
    updateProject,
    deleteProject,
    getProjectsByMember,
} from '../controllers/projectController.js';

const router = express.Router();

// Create a new project
router.post('/', createProject); // POST /api/projects

// Get all projects
router.get('/', getAllProjects); // GET /api/projects

// Get a specific project by ID
router.get('/:id', getProjectById); // GET /api/projects/:id

// Update a project by ID
router.put('/:id', updateProject); // PUT /api/projects/:id

// Delete a project by ID
router.delete('/:id', deleteProject); // DELETE /api/projects/:id

// Get all projects by member ID
router.get('/members/:memberId', getProjectsByMember); // GET /api/projects/members/:memberId

export default router;
