const mongoose = require("mongoose");

const healthTipSchema = new mongoose.Schema({
  id: String,
  name: String,
  nameEn: String,
  period: String,
  periodEn: String,
  months: [Number],
  icon: String,
  color: String,
  priority: String,
  commonDiseases: [
    {
      name: String,
      nameEn: String,
      severity: String
    }
  ],
  tips: [
    {
      id: String,
      title: String,
      titleEn: String,
      urgent: Boolean,
      category: String,
      items: [String]
    }
  ]
});

module.exports = mongoose.model("HealthTip", healthTipSchema);
