
const express = require('express');
const router = express.Router();
const openaiModel = require('../models/openaiModel');

router.post('/', async (req, res) => {
    const userMessage = req.body.message;

    try {
        const botResponse = await openaiModel.getResponse(userMessage);
        res.json({ content: botResponse });
    } catch (error) {
        res.status(500).send('Error communicating with OpenAI API');
    }
});

module.exports = router;