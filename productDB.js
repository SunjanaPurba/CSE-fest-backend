require("dotenv").config();
const connectDB = require("./db/connect");

const Product = require("./models/product");
const Facility = require("./models/Facility");
const HealthTip = require("./models/HealthTip");
const Event = require("./models/Event");
const Volunteer = require("./models/Volunteer");
const Symptom = require("./models/Symptom");

const ProductsJson = require("./products.json");
const facilitiesData = require("./facilities.json");
const healthTipsData = require("./healthTips.json");
const eventsData = require("./healthEvents.json");
const volunteersData = require("./voulenteer.json");
const symptomData = require("./symptom.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);

    await Product.deleteMany();
    await Product.create(ProductsJson);

    await Facility.deleteMany();
    await Facility.create(facilitiesData);

    await HealthTip.deleteMany();
    await HealthTip.create(healthTipsData.seasons);

    await Event.deleteMany();
    await Event.create(eventsData.events);

    await Volunteer.deleteMany();
    await Volunteer.create(volunteersData);

    await Symptom.deleteMany();
    await Symptom.create(symptomData);

    console.log("✅ Database Seed Successful!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seed Error:", error);
    process.exit(1);
  }
};

start();
