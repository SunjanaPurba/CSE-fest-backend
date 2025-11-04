const fs = require("fs");
const path = require("path");

const healthTipsPath = path.join(__dirname, "../healthTips.json");
const healthTipsData = JSON.parse(fs.readFileSync(healthTipsPath, "utf-8"));

const getAllHealthTips = (req, res) => {
  res.json({ success: true, data: healthTipsData });
};
const getCurrentSeasonTips = (req, res) => {
  const currentMonth = new Date().getMonth() + 1;
  const currentSeason = healthTipsData.seasons.find((s) =>
    s.months.includes(currentMonth)
  );
  res.json({
    success: true,
    data: {
      currentSeason: currentSeason || healthTipsData.seasons[0],
      yearRound: healthTipsData.yearRound,
      emergencyContacts: healthTipsData.emergencyContacts
    }
  });
};
const getSeasonTips = (req, res) => {
  const { seasonId } = req.params;
  const season = healthTipsData.seasons.find((s) => s.id === seasonId);
  if (!season) {
    return res.status(404).json({ success: false, message: "Season not found" });
  }
  res.json({ success: true, data: season });
};

const getYearRoundTips = (req, res) => {
  res.json({ success: true, data: healthTipsData.yearRound });
};

const getEmergencyContacts = (req, res) => {
  res.json({ success: true, data: healthTipsData.emergencyContacts });
};

module.exports = {
  getAllHealthTips,
  getCurrentSeasonTips,
  getSeasonTips,
  getYearRoundTips,
  getEmergencyContacts
};
