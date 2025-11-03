const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const dns = require("dns");
require("dotenv").config();

// DNS override
dns.setServers(["8.8.8.8", "8.8.4.4"]);

app.use(express.json());

const PORT = process.env.PORT || 5000;
const products_routes = require("./routes/products");

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api/products", products_routes);

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
