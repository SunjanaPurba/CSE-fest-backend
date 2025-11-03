const Request = require("../models/Request");

// Submit request (backend will generate anonymous name)
exports.submitRequest = async (req, res) => {
  try {
    const { channel, message, shareContact } = req.body;

    if (!channel || !message) {
      return res.status(400).json({ error: "Channel and message required" });
    }

    // Generate anonymous name here
    const rand = Math.floor(1000 + Math.random() * 9000);
    const anonymousName = `Guest-${rand}`;

    const requestId = `RB-${Math.floor(1000 + Math.random() * 9000)}`;

    const newReq = await Request.create({
      requestId,
      channel,
      message,
      shareContact: !!shareContact,
      anonymousName,
    });

    res.json({
      success: true,
      message: "Request received successfully.",
      requestId: newReq.requestId,
      anonymousName, // Send generated name back to frontend
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
