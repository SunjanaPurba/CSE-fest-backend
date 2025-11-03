const mongoose = require("mongoose");

const HealthTipSchema = new mongoose.Schema({
  seasonId: { type: String },
  title: { type: String, required: true },
  titleEn: { type: String },
  category: { type: String },
  urgent: { type: Boolean, default: false },
  items: [{ type: String }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("HealthTip", HealthTipSchema);
