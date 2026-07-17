const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js")

const listingSchema = new Schema({
    title : { 
        type :String,
        required:true,
    },
    description: String,

   // image:{
     //   default: "https://unsplash.com/photos/brown-and-black-wooden-house-TiVPTYCG_3E",
       // set : (v) => v === ""? "https://unsplash.com/photos/brown-and-black-wooden-house-TiVPTYCG_3E" : v ,
    //},
    image: {
    url:String,
    filename:String,
    },
  price: {
    type: Number,
    required: true,
},

maxGuests: {
    type: Number,
    default: 4,
    min: 1,
},

bedrooms: {
    type: Number,
    default: 1,
    min: 1,
},

bathrooms: {
    type: Number,
    default: 1,
    min: 1,
},

location: String,
    country : String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref:"Review"
        },
    ],
    bookings: [
    {
        type: Schema.Types.ObjectId,
        ref: "Booking",
    },
],
    owner: {
        type:Schema.Types.ObjectId,
        ref:"User",
    },
    geometry: {
    type: {
        type: String,
        enum: ["Point"],
        default: "Point",
    },
    coordinates: {
        type: [Number],
        default: [77.2090, 28.6139], // Delhi
    },
},
category: {
    type: String,
    enum: [
        "Trending",
        "Iconic Cities",
        "Mountains",
        "Castles",
        "Arctic",
        "Camping",
        "Farms",
        "Amazing Pools",
        "Beach",
        "Forest",
        "Historic"
    ],
    default: "Trending"
},
amenities: {
    type: [String],
    default: [],
},

featured: {
    type: Boolean,
    default: false,
},
});

listingSchema.post("findOneAndDelete" , async(listing) =>{
    if(listing){
await Review.deleteMany({_id: {$in :listing.reviews}});
    }

});

const Listing = mongoose.model("Listing" , listingSchema);
module.exports = Listing;