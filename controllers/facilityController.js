const Facility = require("../models/Facility");

// ✅ GET all facilities
const getAllFacilities = async (req, res) => {
  try {
    const facilities = await Facility.find();
    res.status(200).json(facilities);
  } catch (error) {
    res.status(500).json({ message: "Error fetching facilities", error });
  }
};

// ✅ GET single facility by ID
const getFacilityById = async (req, res) => {
  try {
    const facility = await Facility.findById(req.params.id);
    if (!facility) {
      return res.status(404).json({ message: "Facility not found" });
    }
    res.status(200).json(facility);
  } catch (error) {
    res.status(500).json({ message: "Error fetching facility", error });
  }
};

module.exports = { getAllFacilities, getFacilityById };
