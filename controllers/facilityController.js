const Facility = require("../models/Facility");

// GET /api/facilities
exports.getFacilities = async (req, res) => {
  try {
    const facilities = await Facility.find();
    res.json(facilities);
  } catch (err) {
    console.error("Error fetching facilities:", err);
    res.status(500).json({ error: "Failed to fetch facilities" });
  }
};

// POST /api/facilities
exports.createFacility = async (req, res) => {
  try {
    const {
      name,
      type,
      category,
      upazila,
      union,
      open,
      lat,
      lon,
      busAccess,
      landmark,
    } = req.body;

    if (!name || !type || !category || !upazila || !union || !lat || !lon) {
      return res.status(400).json({ success: false, error: "Missing required fields" });
    }

    const newFacility = new Facility({
      name,
      type,
      category,
      upazila,
      union,
      open,
      lat,
      lon,
      busAccess: busAccess || false,
      landmark,
    });

    const saved = await newFacility.save();
    res.json({ success: true, facilityId: saved._id });
  } catch (err) {
    console.error("Error saving facility:", err);
    res.status(500).json({ success: false, error: "Server error" });
  }
};
