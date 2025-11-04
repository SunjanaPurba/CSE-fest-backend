const express = require("express");
const router = express.Router();
const {
  getAllHealthTips,
  getCurrentSeasonTips,
  getSeasonTips,
  getYearRoundTips,
  getEmergencyContacts
} = require("../controllers/healthTipsController");

router.get("/", getAllHealthTips);
router.get("/current", getCurrentSeasonTips);
router.get("/season/:seasonId", getSeasonTips);
router.get("/year-round", getYearRoundTips);
router.get("/emergency", getEmergencyContacts);

module.exports = router;
