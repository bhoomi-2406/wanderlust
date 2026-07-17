const mongoose = require("mongoose");
const Listing = require("../models/listing");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
    await mongoose.connect(MONGO_URL);
}

const updates = {
    "Luxury Apartment near Times Square": {
        maxGuests: 4,
        bedrooms: 2,
bathrooms: 2,
        amenities: [
            "WiFi",
            "Air Conditioning",
            "Kitchen",
            "Workspace",
            "City Skyline View"
        ],
        featured: false
    },

    "Paris Balcony Studio": {
        maxGuests: 2,
        bedrooms: 1,
bathrooms: 1,
        amenities: [
            "WiFi",
            "Balcony",
            "Kitchen",
            "Air Conditioning"
        ],
        featured: false
    },

    "Tokyo Skyline Residence": {
        maxGuests: 3,
        bedrooms: 2,
bathrooms: 1,
        amenities: [
            "WiFi",
            "Workspace",
            "Kitchen",
            "City Skyline View"
        ],
        featured: false
    },

   "Dubai Marina Penthouse": {
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 3,
    amenities: [
        "WiFi",
        "Air Conditioning",
        "Kitchen",
        "Balcony",
        "City Skyline View",
        "Free Parking"
    ],
    featured: true
},
"Swiss Alpine Chalet": {
    maxGuests: 8,
    bedrooms: 4,
    bathrooms: 3,
    amenities: [
        "WiFi",
        "Mountain View",
        "Fireplace",
        "Kitchen",
        "Free Parking",
        "Balcony"
    ],
    featured: true
},
"Himalayan View Cabin": {
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 1,
    amenities: [
        "WiFi",
        "Mountain View",
        "Fireplace",
        "Kitchen"
    ],
    featured: false
},
"Rocky Mountain Escape": {
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 2,
    amenities: [
        "WiFi",
        "Mountain View",
        "Kitchen",
        "Free Parking",
        "Garden"
    ],
    featured: false
},
"Andes Peak Lodge": {
    maxGuests: 5,
    bedrooms: 2,
    bathrooms: 2,
    amenities: [
        "WiFi",
        "Mountain View",
        "Garden",
        "Breakfast Included"
    ],
    featured: false
},
"Scottish Highland Castle": {
    maxGuests: 12,
    bedrooms: 6,
    bathrooms: 5,
    amenities: [
        "WiFi",
        "Fireplace",
        "Garden",
        "Kitchen",
        "Free Parking",
        "Breakfast Included"
    ],
    featured: true
},
"Royal Castle of Bavaria": {
    maxGuests: 10,
    bedrooms: 5,
    bathrooms: 4,
    amenities: [
        "WiFi",
        "Garden",
        "Fireplace",
        "Kitchen",
        "Free Parking"
    ],
    featured: true
},
"Loire Valley Royal Palace": {
    maxGuests: 8,
    bedrooms: 4,
    bathrooms: 3,
    amenities: [
        "WiFi",
        "Garden",
        "Kitchen",
        "Breakfast Included"
    ],
    featured: false
},
"Czech Fairytale Castle": {
    maxGuests: 10,
    bedrooms: 5,
    bathrooms: 4,
    amenities: [
        "WiFi",
        "Fireplace",
        "Garden",
        "Kitchen"
    ],
    featured: false
},
"Glass Igloo under the Northern Lights": {
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    amenities: [
        "WiFi",
        "Heating",
        "Northern Lights View",
        "Breakfast Included"
    ],
    featured: true
},
"Snow Lodge in Iceland": {
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 1,
    amenities: [
        "WiFi",
        "Heating",
        "Fireplace",
        "Kitchen"
    ],
    featured: false
},
"Polar Bear Expedition Cabin": {
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    amenities: [
        "Heating",
        "Northern Lights View",
        "Breakfast Included"
    ],
    featured: true
},
"Frozen Fjord Retreat": {
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 1,
    amenities: [
        "Heating",
        "Kitchen",
        "Mountain View"
    ],
    featured: false
},
"Forest Tent Adventure": {
    maxGuests: 4,
    bedrooms: 1,
    bathrooms: 1,
    amenities: [
        "Mountain View",
        "Free Parking",
        "Pet Friendly"
    ],
    featured: false
},
"Lakeside Camping Escape":{
    maxGuests: 6,
    bedrooms: 2,
    bathrooms: 1,
    amenities: [
        "Lake View",
        "Free Parking",
        "Pet Friendly"
    ],
    featured: false
},
"Mountain Camp under the Stars": {
    maxGuests: 4,
    bedrooms: 1,
    bathrooms: 1,
    amenities: [
        "Mountain View",
        "Fire Pit",
        "Free Parking",
        "Pet Friendly"
    ],
    featured: false
},
"Desert Glamping Retreat": {
    maxGuests: 4,
    bedrooms: 1,
    bathrooms: 1,
    amenities: [
        "Desert View",
        "Breakfast Included",
        "Free Parking",
        "Pet Friendly"
    ],
    featured: true
},
"Tuscany Vineyard Farmhouse": {
    maxGuests: 8,
    bedrooms: 4,
    bathrooms: 3,
    amenities: [
        "WiFi",
        "Garden",
        "Kitchen",
        "Breakfast Included",
        "Free Parking"
    ],
    featured: true
},

"Lavender Farm Retreat": {
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 1,
    amenities: [
        "Garden",
        "Breakfast Included",
        "WiFi",
        "Pet Friendly"
    ],
    featured: false
},

"Organic Countryside Cottage": {
    maxGuests: 5,
    bedrooms: 2,
    bathrooms: 2,
    amenities: [
        "Garden",
        "Kitchen",
        "Pet Friendly",
        "Free Parking"
    ],
    featured: false
},

"Sunflower Ranch Escape": {
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 2,
    amenities: [
        "Garden",
        "Breakfast Included",
        "Free Parking",
        "WiFi"
    ],
    featured: false
},
"Bali Infinity Pool Villa": {
    maxGuests: 8,
    bedrooms: 4,
    bathrooms: 3,
    amenities: [
        "Infinity Pool",
        "WiFi",
        "Kitchen",
        "Garden"
    ],
    featured: true
},

"Santorini Cliffside Pool Suite": {
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    amenities: [
        "Infinity Pool",
        "Ocean View",
        "WiFi",
        "Balcony"
    ],
    featured: true
},

"Luxury Desert Pool Villa": {
    maxGuests: 8,
    bedrooms: 4,
    bathrooms: 3,
    amenities: [
        "Private Pool",
        "WiFi",
        "Kitchen",
        "Free Parking"
    ],
    featured: true
},

"Maldives Overwater Pool Villa": {
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    amenities: [
        "Private Pool",
        "Ocean View",
        "Breakfast Included",
        "WiFi"
    ],
    featured: true
},
"Goa Beach House": {
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 2,
    amenities: [
        "Beach Access",
        "Garden",
        "WiFi",
        "Free Parking"
    ],
    featured: false
},

"Malibu Oceanfront Villa": {
    maxGuests: 8,
    bedrooms: 4,
    bathrooms: 3,
    amenities: [
        "Beach Access",
        "Ocean View",
        "Private Pool",
        "WiFi"
    ],
    featured: true
},

"Santorini Seaside Villa": {
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    amenities: [
        "Ocean View",
        "Balcony",
        "WiFi",
        "Kitchen"
    ],
    featured: true
},

"Phuket Tropical Beach Resort": {
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 2,
    amenities: [
        "Beach Access",
        "Garden",
        "Breakfast Included",
        "WiFi"
    ],
    featured: false
},
"Black Forest Woodland Cabin": {
    maxGuests: 5,
    bedrooms: 2,
    bathrooms: 2,
    amenities: [
        "Forest View",
        "Garden",
        "Kitchen"
    ],
    featured: false
},

"Amazon Rainforest Eco Lodge": {
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 1,
    amenities: [
        "Forest View",
        "Garden",
        "Pet Friendly"
    ],
    featured: false
},

"Canadian Pine Forest Retreat": {
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 2,
    amenities: [
        "Fireplace",
        "Forest View",
        "Kitchen",
        "WiFi"
    ],
    featured: false
},

"Finnish Forest Glass Cabin": {
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 1,
    amenities: [
        "Forest View",
        "Heating",
        "WiFi",
        "Northern Lights View"
    ],
    featured: true
},
"Rome Heritage Apartment": {
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 2,
    amenities: [
        "WiFi",
        "Kitchen",
        "Balcony",
        "Historic View"
    ],
    featured: true
},

"Kyoto Traditional Machiya": {
    maxGuests: 5,
    bedrooms: 2,
    bathrooms: 2,
    amenities: [
        "Garden",
        "WiFi",
        "Traditional Interior",
        "Kitchen"
    ],
    featured: true
},

"Old Prague Heritage Home": {
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 2,
    amenities: [
        "WiFi",
        "Fireplace",
        "Historic View",
        "Kitchen"
    ],
    featured: false
},

"Colonial Haveli Stay": {
    maxGuests: 8,
    bedrooms: 4,
    bathrooms: 3,
    amenities: [
        "Courtyard",
        "Garden",
        "WiFi",
        "Kitchen"
    ],
    featured: true
},
"London Riverside Apartment": {
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    amenities: [
        "WiFi",
        "Kitchen",
        "Heating",
        "TV",
        "Washing Machine",
        "Workspace",
    ],
    featured: true,
},

"Singapore Marina Bay Suite": {
    maxGuests: 5,
    bedrooms: 2,
    bathrooms: 2,
    amenities: [
        "WiFi",
        "Kitchen",
        "Air Conditioning",
        "Pool",
        "Gym",
        "Workspace",
    ],
    featured: true,
},

"Norwegian Fjord Cabin": {
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 2,
    amenities: [
        "WiFi",
        "Fireplace",
        "Mountain View",
        "Free Parking",
        "Kitchen",
        "Balcony",
    ],
    featured: true,
},

"Patagonia Adventure Lodge": {
    maxGuests: 5,
    bedrooms: 2,
    bathrooms: 2,
    amenities: [
        "WiFi",
        "Fireplace",
        "Kitchen",
        "Free Parking",
        "Mountain View",
        "Garden",
    ],
    featured: false,
},

"Irish Medieval Castle Stay": {
    maxGuests: 8,
    bedrooms: 4,
    bathrooms: 3,
    amenities: [
        "WiFi",
        "Fireplace",
        "Garden",
        "Free Parking",
        "Kitchen",
        "Breakfast Included",
    ],
    featured: true,
},
"Neuschwanstein Royal Castle": {
    maxGuests: 10,
    bedrooms: 5,
    bathrooms: 4,
    amenities: [
        "WiFi",
        "Kitchen",
        "Fireplace",
        "Garden",
        "Free Parking",
        "Breakfast Included",
    ],
    featured: true,
},

"French Countryside Chateau": {
    maxGuests: 8,
    bedrooms: 4,
    bathrooms: 3,
    amenities: [
        "WiFi",
        "Garden",
        "Kitchen",
        "Fireplace",
        "Breakfast Included",
    ],
    featured: false,
},

"Lapland Snow Glass Cabin": {
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    amenities: [
        "WiFi",
        "Heating",
        "Mountain View",
        "Breakfast Included",
    ],
    featured: true,
},

"Arctic Ice Dome Retreat": {
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 1,
    amenities: [
        "WiFi",
        "Heating",
        "Mountain View",
        "Breakfast Included",
    ],
    featured: false,
},

"Riverside Camping Haven": {
    maxGuests: 4,
    bedrooms: 1,
    bathrooms: 1,
    amenities: [
        "Mountain View",
        "Free Parking",
        "Pet Friendly",
        "Garden",
    ],
    featured: false,
},
"Swiss Lakefront Chalet": {
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 2,
    amenities: [
        "WiFi",
        "Kitchen",
        "Fireplace",
        "Mountain View",
        "Balcony",
        "Free Parking",
    ],
    featured: true,
},

"Alaskan Wilderness Cabin": {
    maxGuests: 5,
    bedrooms: 2,
    bathrooms: 2,
    amenities: [
        "WiFi",
        "Kitchen",
        "Fireplace",
        "Mountain View",
        "Free Parking",
        "Garden",
    ],
    featured: false,
},

"Iceland Volcano Retreat": {
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 1,
    amenities: [
        "WiFi",
        "Heating",
        "Mountain View",
        "Breakfast Included",
        "Free Parking",
    ],
    featured: true,
},

"Luxury Safari Glamping": {
    maxGuests: 4,
    bedrooms: 1,
    bathrooms: 1,
    amenities: [
        "WiFi",
        "Breakfast Included",
        "Garden",
        "Free Parking",
        "Pet Friendly",
    ],
    featured: true,
},

"Dutch Countryside Windmill Stay": {
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    amenities: [
        "WiFi",
        "Kitchen",
        "Heating",
        "Garden",
        "Breakfast Included",
    ],
    featured: false,
},
"Lake Bled Alpine Cabin": {
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    amenities: [
        "WiFi",
        "Kitchen",
        "Mountain View",
        "Balcony",
        "Free Parking",
        "Fireplace",
    ],
    featured: true,
},

"Santorini Cave House": {
    maxGuests: 5,
    bedrooms: 2,
    bathrooms: 2,
    amenities: [
        "WiFi",
        "Air Conditioning",
        "Beach Access",
        "Balcony",
        "Pool",
        "Breakfast Included",
    ],
    featured: true,
},

"Amazon Canopy Eco Lodge": {
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 1,
    amenities: [
        "WiFi",
        "Garden",
        "Breakfast Included",
        "Free Parking",
        "Pet Friendly",
    ],
    featured: false,
},
"Zermatt Matterhorn Chalet": {
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 2,
    amenities: [
        "WiFi",
        "Kitchen",
        "Fireplace",
        "Mountain View",
        "Balcony",
        "Free Parking",
    ],
    featured: true,
},

"Kyoto Zen Garden Villa": {
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    amenities: [
        "WiFi",
        "Kitchen",
        "Garden",
        "Heating",
        "Breakfast Included",
    ],
    featured: true,
},

"Maldives Overwater Lagoon Villa": {
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    amenities: [
        "WiFi",
        "Pool",
        "Beach Access",
        "Air Conditioning",
        "Balcony",
        "Breakfast Included",
    ],
    featured: true,
},
"Cappadocia Cave Suite": {
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    amenities: [
        "WiFi",
        "Air Conditioning",
        "Heating",
        "Balcony",
        "Breakfast Included",
        "Free Parking",
    ],
    featured: true,
},

"Queenstown Lake Lodge": {
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 2,
    amenities: [
        "WiFi",
        "Kitchen",
        "Fireplace",
        "Mountain View",
        "Balcony",
        "Free Parking",
    ],
    featured: true,
},

"Costa Rica Rainforest Treehouse": {
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    amenities: [
        "WiFi",
        "Garden",
        "Breakfast Included",
        "Mountain View",
        "Pet Friendly",
    ],
    featured: true,
},
"Sahara Luxury Desert Camp": {
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 1,
    amenities: [
        "WiFi",
        "Breakfast Included",
        "Free Parking",
        "Air Conditioning",
        "Garden",
    ],
    featured: true,
},

"Tuscany Vineyard Estate": {
    maxGuests: 8,
    bedrooms: 4,
    bathrooms: 3,
    amenities: [
        "WiFi",
        "Kitchen",
        "Garden",
        "Pool",
        "Breakfast Included",
        "Free Parking",
    ],
    featured: true,
},

"Algarve Ocean Cliff Villa": {
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 3,
    amenities: [
        "WiFi",
        "Pool",
        "Beach Access",
        "Air Conditioning",
        "Balcony",
        "Free Parking",
    ],
    featured: true,
},
"Icelandic Glass Aurora Retreat": {
    maxGuests: 3,
    bedrooms: 1,
    bathrooms: 1,
    amenities: [
        "WiFi",
        "Breakfast Included",
        "Heating",
        "Mountain View",
        "Free Parking",
        "Hot Tub",
    ],
    featured: true,
},

"Kyoto Bamboo Heritage House": {
    maxGuests: 5,
    bedrooms: 2,
    bathrooms: 2,
    amenities: [
        "WiFi",
        "Kitchen",
        "Garden",
        "Traditional Experience",
        "Air Conditioning",
        "Free Parking",
    ],
    featured: true,
},

"Amalfi Coastal Cliff Sanctuary": {
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 2,
    amenities: [
        "WiFi",
        "Ocean View",
        "Pool",
        "Balcony",
        "Air Conditioning",
        "Beach Access",
    ],
    featured: true,
},
};


async function enrichData() {

    const listings = await Listing.find({});

    let updatedCount = 0;

    for (let listing of listings) {

        const update = updates[listing.title];

        if (!update) continue;

        listing.maxGuests = update.maxGuests;
        listing.bedrooms = update.bedrooms;
        listing.bathrooms = update.bathrooms;
        listing.amenities = update.amenities;
        listing.featured = update.featured;

        await listing.save();

        updatedCount++;

        console.log(`Updated: ${listing.title}`);
    }

    console.log(`\n${updatedCount} listing(s) updated.`);

    mongoose.connection.close();
}

main()
    .then(() => {
        console.log("Connected to MongoDB");
        return enrichData();
    })
    .catch(console.error);