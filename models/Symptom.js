const mongoose = require("mongoose");

const symptomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  danger_signs: { type: String, required: true },
  action: { type: String, required: true }
});

module.exports = mongoose.model("Symptom", symptomSchema);
