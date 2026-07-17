const Listing = require("../models/listing") 
const getCoordinates = require("../utils/geocode");
const User = require("../models/user");
const Booking = require("../models/booking");
const getWeather = require("../utils/weather");
const getNearbyPlaces = require("../utils/nearbyExplorer");


module.exports.index = async (req, res) => {
    const { category, q, price } = req.query;

    let query = {};

    // Category Filter
    if (category) {
        query.category = category;
    }

    // Search Filter
    if (q && q.trim() !== "") {
        query.$or = [
            { title: { $regex: q, $options: "i" } },
            { location: { $regex: q, $options: "i" } },
            { country: { $regex: q, $options: "i" } }
        ];
    }

    // Price Filter
    if (price === "0-2000") {
        query.price = { $lte: 2000 };
    }
    else if (price === "2000-5000") {
        query.price = { $gte: 2000, $lte: 5000 };
    }
    else if (price === "5000-10000") {
        query.price = { $gte: 5000, $lte: 10000 };
    }
    else if (price === "10000+") {
        query.price = { $gte: 10000 };
    }

    const allListings = await Listing.find(query);
    const featuredListings = await Listing.find({
    featured: true
}).limit(6);
const featuredIds = featuredListings.map(listing => listing._id);
const budgetListings = await Listing.find({
    _id: { $nin: featuredIds }
})
.sort({ price: 1 })
.limit(6);
const excludedIds = [
    ...featuredListings.map(listing => listing._id),
    ...budgetListings.map(listing => listing._id),
];

const luxuryListings = await Listing.find({
    price: { $gte: 12000 },
    _id: { $nin: excludedIds }
})
.sort({ price: -1 })
.limit(6);

let wishlistedIds = [];

if (req.user) {
    const user = await User.findById(req.user._id);

    wishlistedIds = user.wishlist.map(id => id.toString());
}

res.render("listings/index.ejs", {
    allListings,
    featuredListings,
    budgetListings,
    luxuryListings,
    searchQuery: q || "",
    selectedCategory: category || "",
    selectedPrice: price || "",
    wishlistedIds
});
};
 module.exports.renderNewForm = (req,res) =>{
    
    res.render("listings/new.ejs");
 }

 module.exports.showListing = async (req, res) => {

    let { id } = req.params;

    const listing = await Listing.findById(id)
        .populate({
    path: "reviews",
    options: {
        sort: { createdAt: -1 },
    },
    populate: {
        path: "author",
    },
})
        .populate("owner");

    if (!listing) {
        req.flash("error", "The listing you are looking for does not exist!");
        return res.redirect("/listings");
    }

    let isWishlisted = false;

    if (req.user) {
        const user = await User.findById(req.user._id);

        isWishlisted = user.wishlist.some(
            listingId => listingId.equals(listing._id)
        );
    }
   const today = new Date();

// Start at midnight so today's bookings are still included
today.setHours(0, 0, 0, 0);

const bookedDates = await Booking.find({
    listing: listing._id,
    status: "Confirmed",
    checkOut: { $gte: today }
}).select("checkIn checkOut");
const weather = await getWeather(
    `${listing.location}, ${listing.country}`
)
let nearbyPlaces = [];

const groupedPlaces = {
    restaurants: [],
    cafes: [],
    attractions: [],
    hospitals: [],
    atms: [],
};

if (listing.geometry?.coordinates) {

    const [longitude, latitude] = listing.geometry.coordinates;

    nearbyPlaces = await getNearbyPlaces(latitude, longitude);

    nearbyPlaces.forEach(place => {

        const category = place.properties.categories || [];

        if (category.includes("catering.restaurant")) {
            groupedPlaces.restaurants.push(place);
        }

        else if (category.includes("catering.cafe")) {
            groupedPlaces.cafes.push(place);
        }

        else if (category.includes("tourism.attraction")) {
            groupedPlaces.attractions.push(place);
        }

        else if (category.includes("healthcare.hospital")) {
            groupedPlaces.hospitals.push(place);
        }

        else if (category.includes("service.financial.atm")) {
            groupedPlaces.atms.push(place);
        }

    });

}

   res.render("listings/show.ejs", {
    listing,
    isWishlisted,
    bookedDates,
     weather,
       groupedPlaces,
});
};

  module.exports.createListing = async (req , res , next) =>{
   let url = req.file.path;
   let filename = req.file.filename;
   console.log(url , ".." ,filename);
     if (!req.body.listing.image.url) {
      req.body.listing.image = {
          filename: "default",
          url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200"
      };
  }
    const newListing = new Listing(req.body.listing);

    const location = `${req.body.listing.location}, ${req.body.listing.country}`;

const geometry = await getCoordinates(location);

if (geometry) {
    newListing.geometry = geometry;
}

    newListing.owner = req.user._id;
    newListing.image = {url, filename}
       await newListing.save(); 
       req.flash("success" ,"new listing created");
       res.redirect("/listings");
   
      
    }

    module.exports.renderEditForm = async(req,res) =>{
         let {id} = req.params;
       const listing = await Listing.findById(id);
       if(!listing){
        req.flash("error" ,"The listing you are looking for does not exist!");
        return res.redirect("/listings");
      }
      let originalImageUrl = listing.image?.url
    ? listing.image.url.replace("/upload", "/upload/w_250")
    : "";
       res.render("listings/edit.ejs" , {listing , originalImageUrl})
      }

      module.exports.updateListing = async(req,res) =>{
        
        
             if(!req.body.listing){
                throw new ExpressError(400, "send some valid title")
            }
             let {id} = req.params;
          let listing =  await Listing.findByIdAndUpdate(id , {...req.body.listing})
          if(typeof req.file !== "undefined"){
          let url = req.file.path;
   let filename = req.file.filename;
   listing.image ={url, filename};
   await listing.save();
          }

             req.flash("success" ,"Listing Updated!");
             res.redirect(`/listings/${id}`);
         }

         module.exports.destroyListing = async(req,res) =>{
               let {id} = req.params;
               let deletedListing = await Listing.findByIdAndDelete(id);
               req.flash("success" ," listing deleted");
               console.log(deletedListing);
               res.redirect("/listings");
            }

            module.exports.addToWishlist = async (req, res) => {
    const { id } = req.params;

    const user = await User.findById(req.user._id);

    if (!user.wishlist.includes(id)) {
        user.wishlist.push(id);
        await user.save();
    }

    req.flash("success", "Added to wishlist!");
    res.redirect(`/listings/${id}`);
};
module.exports.removeFromWishlist = async (req, res) => {
    const { id } = req.params;

    await User.findByIdAndUpdate(req.user._id, {
        $pull: {
            wishlist: id
        }
    });

    req.flash("success", "Removed from wishlist!");
    res.redirect(`/listings/${id}`);
};