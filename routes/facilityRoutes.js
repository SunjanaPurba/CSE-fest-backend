const express = require("express");
const router = express.Router();
const {
  getAllFacilities,
  getFacilityById
} = require("../controllers/facilityController");

router.get("/", getAllFacilities);
router.get("/:id", getFacilityById);

module.exports = router;
