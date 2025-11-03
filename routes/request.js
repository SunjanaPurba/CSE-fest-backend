const express = require("express");
const router = express.Router();
const { submitRequest } = require("../controllers/request");

// POST request only
router.post("/anonymous-request", submitRequest);

module.exports = router;
