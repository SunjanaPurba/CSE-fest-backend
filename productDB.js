require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/product");
const Facility = require("./models/Facility");
const HealthTip = require("./models/HealthTip");

const ProductsJson = require("./products.json");
const facilitiesData = require("./facilities.json");
const healthTipsData = require("./healthTips.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await Product.deleteMany();
    await Product.create(ProductsJson);
    await Facility.deleteMany();
    await Facility.create(facilitiesData);
    await HealthTip.deleteMany();
    await HealthTip.create(healthTipsData.seasons);
    console.log("Success");
  } catch (error) {
    console.log(error);
  }
};

start();
