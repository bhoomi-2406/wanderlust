const express =require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js")
const {isLoggedIn , isOwner , validateListing} = require("../middleware.js");
const { findById } = require("../models/user.js");

const listingController = require("../controllers/listing.js");

const multer  = require('multer')
const{storage}  =require("../cloudConfig.js")
const upload = multer({storage })

router.route("/")
   .get( wrapAsync(listingController.index))
.post(
    upload.single("listing[image]"),
     validateListing,
     isLoggedIn,
    
 wrapAsync(listingController.createListing)
 );

 //new route
 router.get("/new" , isLoggedIn,listingController.renderNewForm);

router.post(
    "/:id/wishlist",
    isLoggedIn,
    wrapAsync(listingController.addToWishlist)
);

router.delete(
    "/:id/wishlist",
    isLoggedIn,
    wrapAsync(listingController.removeFromWishlist)
);

 router.route("/:id")
 .get( wrapAsync(listingController.showListing))
 .put(
    upload.single("listing[image]"),
      validateListing,isLoggedIn,isOwner,
      wrapAsync(listingController.updateListing))
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));    

  //edit route
 router.get("/:id/edit" ,isLoggedIn ,isOwner ,wrapAsync(listingController.renderEditForm ))

   module.exports = router;