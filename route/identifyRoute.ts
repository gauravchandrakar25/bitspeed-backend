const express = require("express");
const router = express.Router();
const { identifyController } = require("../controller/identify");

router.post("/identify", identifyController);

module.exports = router;
