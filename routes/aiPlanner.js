const express = require("express");
const router = express.Router();

const aiPlanner = require("../controllers/aiPlanner");

router.get("/", aiPlanner.renderPlanner);

// NEW ROUTE (must come before POST)
router.get("/:id", aiPlanner.renderListingPlanner);

router.post("/", aiPlanner.generateTrip);

module.exports = router;