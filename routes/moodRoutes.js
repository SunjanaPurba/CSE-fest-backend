const express = require("express");
const router = express.Router();
const MoodEntry = require("../models/MoodEntry");

router.post("/mood-entries", async (req, res) => {
    const { anonymousName, mood, note, date } = req.body;

    if (!mood || !note) {
        return res.status(400).json({ success: false, message: "Mood and note are required." });
    }

    try {
        const newEntry = new MoodEntry({ anonymousName, mood, note, date });
        await newEntry.save();
        res.status(201).json({ success: true, message: "Mood entry saved successfully.", entryId: newEntry._id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error." });
    }
});
router.get("/mood-entries", async (req, res) => {
    try {
        const entries = await MoodEntry.find();
        res.status(200).json({ success: true, entries });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error." });
    }
});

module.exports = router;