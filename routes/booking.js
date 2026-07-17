const express = require("express");
const router = express.Router();

const bookingController = require("../controllers/booking");
const wrapAsync = require("../utils/wrapAsync");
const { isLoggedIn } = require("../middleware");

router.get(
    "/",
    isLoggedIn,
    wrapAsync(bookingController.index)
);

router.post(
    "/:id",
    isLoggedIn,
    wrapAsync(bookingController.createBooking)
);
router.delete(
    "/:bookingId",
    isLoggedIn,
    wrapAsync(bookingController.cancelBooking)
);

module.exports = router;