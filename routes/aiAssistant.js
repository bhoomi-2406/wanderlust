const express = require("express");
const router = express.Router();

const aiAssistant = require("../controllers/aiAssistant");

router.post("/:id", aiAssistant.askAssistant);

module.exports = router;