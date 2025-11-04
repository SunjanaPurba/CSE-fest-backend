const Symptom = require("../models/Symptom");
const fs = require("fs");

const getSymptoms = async (req, res) => {
  try {
    const symptoms = await Symptom.find();
    if (symptoms.length === 0) {
      const localData = JSON.parse(fs.readFileSync("./data/symptom.json"));
      return res.json(localData);
    }
    res.json(symptoms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getSymptoms };
