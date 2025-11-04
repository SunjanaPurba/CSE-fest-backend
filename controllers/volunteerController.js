const Volunteer = require('../models/Volunteer');

exports.getAllVolunteers = async (req, res) => {
    try {
        const volunteers = await Volunteer.find();
        res.status(200).json({
            success: true,
            data: volunteers
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching volunteers',
            error: error.message
        });
    }
};

exports.getVolunteerById = async (req, res) => {
    try {
        const volunteer = await Volunteer.findById(req.params.id);
        if (!volunteer) {
            return res.status(404).json({
                success: false,
                message: 'Volunteer not found'
            });
        }
        res.status(200).json({
            success: true,
            data: volunteer
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching volunteer',
            error: error.message
        });
    }
};

exports.createVolunteer = async (req, res) => {
    try {
        const volunteer = await Volunteer.create(req.body);
        res.status(201).json({
            success: true,
            message: 'Volunteer created successfully',
            data: volunteer
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error creating volunteer',
            error: error.message
        });
    }
};

exports.updateVolunteer = async (req, res) => {
    try {
        const volunteer = await Volunteer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!volunteer) {
            return res.status(404).json({
                success: false,
                message: 'Volunteer not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Volunteer updated successfully',
            data: volunteer
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error updating volunteer',
            error: error.message
        });
    }
};

exports.deleteVolunteer = async (req, res) => {
    try {
        const volunteer = await Volunteer.findByIdAndDelete(req.params.id);
        if (!volunteer) {
            return res.status(404).json({
                success: false,
                message: 'Volunteer not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Volunteer deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting volunteer',
            error: error.message
        });
    }
};