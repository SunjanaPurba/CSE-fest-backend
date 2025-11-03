// Static dataset
const healthTipsData = require("../data/healthTipsData");

// GET all health tips
exports.getAllTips = (req, res) => {
  res.json({ success: true, data: healthTipsData });
};

// GET current season's tips based on current month
exports.getCurrentSeasonTips = (req, res) => {
  const currentMonth = new Date().getMonth() + 1;
  const currentSeason = healthTipsData.seasons.find((season) =>
    season.months.includes(currentMonth)
  );

  res.json({
    success: true,
    data: {
      currentSeason: currentSeason || healthTipsData.seasons[0],
      yearRound: healthTipsData.yearRound,
      emergencyContacts: healthTipsData.emergencyContacts,
    },
  });
};

// GET specific season's tips
exports.getSeasonTips = (req, res) => {
  const { seasonId } = req.params;
  const season = healthTipsData.seasons.find((s) => s.id === seasonId);

  if (!season) {
    return res.status(404).json({
      success: false,
      message: "Season not found",
    });
  }

  res.json({ success: true, data: season });
};

// GET year-round tips
exports.getYearRoundTips = (req, res) => {
  res.json({ success: true, data: healthTipsData.yearRound });
};

// GET emergency contacts
exports.getEmergencyContacts = (req, res) => {
  res.json({ success: true, data: healthTipsData.emergencyContacts });
};
