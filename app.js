
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const dns = require("dns");
const cors = require("cors");
require("dotenv").config();

dns.setServers(["8.8.8.8", "8.8.4.4"]);

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const products_routes = require("./routes/products");
const facilities_routes = require("./routes/facilityRoutes");
const request_routes = require("./routes/request");
const healthTips_routes = require("./routes/healthTipsRoutes")
const chatRoute = require('./routes/chatRoute');
const event_routes = require("./routes/eventRoutes");
const volunteerRoutes = require("./routes/volunteerRoutes");

const moodRoutes = require("./routes/moodRoutes");
const symptomRoutes = require("./routes/symptomRoutes");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/products", products_routes);
app.use("/api/facilities", facilities_routes);
app.use("/api", request_routes); 
app.use("/api/health-tips", healthTips_routes)
app.use('/chat', chatRoute);
app.use("/api/event", event_routes);
app.use("/api/volunteers", volunteerRoutes);

app.use("/api", moodRoutes);


app.use("/api/symptoms", symptomRoutes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
  } catch (error) {
    console.error(error);
  }
};

start();
