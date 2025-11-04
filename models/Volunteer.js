// models/Volunteer.js
const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    village: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true
    },
    contact: {
        phone: {
            type: String,
            required: true
        },
        whatsapp: {
            type: Boolean,
            default: false
        },
        hours: {
            type: String,
            required: true
        }
    },
    verification: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Volunteer', volunteerSchema);