const mongoose = require("mongoose");

const AnonymousRequestSchema = new mongoose.Schema({
  anonymousName: { type: String, required: true },
  channel: { type: String, required: true },
  message: { type: String, required: true },
  shareContact: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("AnonymousRequest", AnonymousRequestSchema);

