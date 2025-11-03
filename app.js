import express from "express";
import dns from "dns";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import products_routes from "./routes/products.js";
import facilities_routes from "./routes/facilityRoutes.js";

dotenv.config();

const app = express();
dns.setServers(["8.8.8.8", "8.8.4.4"]);

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api/products", products_routes);
app.use("/api/facilities", facilities_routes);

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`${PORT} Yes I am connected`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();