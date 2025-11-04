const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ['health_checkup', 'blood_donation', 'mental_health', 'vaccination', 'maternal_health']
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  location: {
    venue: String,
    area: String,
    upazila: String,
    district: String,
    address: String
  },
  organizer: {
    name: String,
    contact: String,
    email: String
  },
  services: [String],
  capacity: Number,
  registered: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    default: 'open'
  },
  rsvpRequired: Boolean,
  cost: String,
  eligibility: String,
  description: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);