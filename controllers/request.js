const AnonymousRequest = require("../models/Request");

const generateAnonName = () => {
  return "Guest-" + Math.floor(1000 + Math.random() * 9000);
};
exports.getAnonName = (req, res) => {
  try {
    const name = generateAnonName();
    res.json({ anonymousName: name });
  } catch (err) {
    res.status(500).json({ error: "Failed to generate name" });
  }
};

exports.postAnonymousRequest = async (req, res) => {
  try {
    const { channel, anonymousName, message, shareContact } = req.body;

    if (!channel || !anonymousName || !message) {
      return res.status(400).json({ success: false, error: "Missing required fields" });
    }

    const request = new AnonymousRequest({
      channel,
      anonymousName,
      message,
      shareContact: shareContact || false,
    });

    const saved = await request.save();

    res.json({
      success: true,
      requestId: saved._id,
      anonymousName: saved.anonymousName,
    });
  } catch (err) {
    console.error("Error saving request:", err);
    res.status(500).json({ success: false, error: "Server error" });
  }
};
