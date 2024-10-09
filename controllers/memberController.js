import Member from '../models/MemberModel.js';

// Create a new member
export const createMember = async (req, res) => {
    try {
        const member = new Member(req.body);
        await member.save();
        res.status(201).json(member);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all members
export const getAllMembers = async (req, res) => {
    try {
        const members = await Member.find();
        res.status(200).json(members);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a member by ID
export const getMemberById = async (req, res) => {
    try {
        const member = await Member.findById(req.params.id);
        if (!member) {
            return res.status(404).json({ message: 'Member not found' });
        }
        res.status(200).json(member);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a member by ID
export const updateMember = async (req, res) => {
    try {
        const member = await Member.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!member) {
            return res.status(404).json({ message: 'Member not found' });
        }
        res.status(200).json(member);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a member by ID
export const deleteMember = async (req, res) => {
    try {
        const member = await Member.findByIdAndDelete(req.params.id);
        if (!member) {
            return res.status(404).json({ message: 'Member not found' });
        }
        res.status(200).json({ message: 'Member deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all alumni members
export const getAlumniMembers = async (req, res) => {
    try {
        const alumni = await Member.find({ type: 'alumni' });
        res.status(200).json(alumni);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all current members
export const getCurrentMembers = async (req, res) => {
    try {
        const currentMembers = await Member.find({ type: 'member' });
        res.status(200).json(currentMembers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
