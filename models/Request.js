const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  requestId: { type: String, required: true, unique: true },
  anonymousName: { type: String, required: true },
  message: { type: String, required: true },
  shareContact: { type: Boolean, default: false },
  channel: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Request", requestSchema);
