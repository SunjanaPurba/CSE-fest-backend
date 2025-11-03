const express = require("express");
const router = express.Router();
const anonymousController = require("../controllers/request");

router.get("/anon-name", anonymousController.getAnonName);
router.post("/anonymous-request", anonymousController.postAnonymousRequest);

module.exports = router;
