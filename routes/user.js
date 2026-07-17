const express =require("express");
const router = express.Router();
const User = require("../models/user.js")
const wrapAsync = require("../utils/wrapAsync.js");
const passport= require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const { isLoggedIn } = require("../middleware");

const userController = require("../controllers/users.js");
const listingController = require("../controllers/listing.js");

router.route("/signup")
.get( userController.renderSignupForm)
.post( wrapAsync(userController.signup ))

router.route("/login")
.get( userController.renderLoginForm )
.post(
  saveRedirectUrl,
  (req, res, next) => {
    next();
  },
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
userController.login,
);


router.get("/logout" , userController.logout )

router.get(
    "/wishlist",
    isLoggedIn,
    wrapAsync(userController.renderWishlist)
);

module.exports = router;