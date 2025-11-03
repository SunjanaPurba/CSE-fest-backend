const mongoose = require("mongoose");

const facilitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: String,
  category: String,
  upazila: String,
  union: String,
  open: String,
  lat: Number,
  lon: Number,
  busAccess: Boolean,
  landmark: String
});

module.exports = mongoose.model("Facility", facilitySchema);
