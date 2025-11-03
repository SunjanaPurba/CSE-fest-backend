const mongoose = require("mongoose");

const FacilitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  category: { type: String, required: true },
  upazila: { type: String, required: true },
  union: { type: String, required: true },
  open: { type: String },
  lat: { type: Number, required: true },
  lon: { type: Number, required: true },
  busAccess: { type: Boolean, default: false },
  landmark: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Facility", FacilitySchema);
