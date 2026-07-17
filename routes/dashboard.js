const express = require("express");
const router = express.Router();

const dashboardController = require("../controllers/dashboard");
const { isLoggedIn, isHost } = require("../middleware");

router.get(
    "/",
    isLoggedIn,
    isHost,
    dashboardController.renderDashboard
);

module.exports = router;