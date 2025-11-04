const mongoose = require("mongoose");

const moodEntrySchema = new mongoose.Schema({
    anonymousName: { type: String, required: true, default: "Anonymous" },
    mood: { type: String, required: true },
    note: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

const MoodEntry = mongoose.model("MoodEntry", moodEntrySchema);

module.exports = MoodEntry;