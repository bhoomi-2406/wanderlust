const mongoose = require("mongoose");

const Listing = require("../models/listing");
const User = require("../models/user");
const getCoordinates = require("../utils/geocode");

const initData = require("./newListings");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB");

    await addListings();

    mongoose.connection.close();
}

async function addListings() {

    const usernames = [
        "demo",
        "alex",
        "sophia",
        "john",
        "emma",
    ];

    const users = [];

    for (const username of usernames) {

        const user = await User.findOne({ username });

        if (!user) {
            console.log(`User "${username}" not found.`);
            return;
        }

        users.push(user);
    }

    let ownerIndex = 0;
    let added = 0;
    let skipped = 0;

    for (const listingData of initData.data) {

        const exists = await Listing.findOne({
            title: listingData.title,
        });

        if (exists) {
            console.log(`Skipped: ${listingData.title}`);
            skipped++;
            continue;
        }

        const listing = new Listing(listingData);

        const location = `${listing.location}, ${listing.country}`;

        const geometry = await getCoordinates(location);

        if (geometry) {
            listing.geometry = geometry;
        }

        listing.owner = users[ownerIndex]._id;

        ownerIndex = (ownerIndex + 1) % users.length;

        await listing.save();

        console.log(`Added: ${listing.title}`);

        added++;
    }

    console.log("\n------------------------");
    console.log(`Added   : ${added}`);
    console.log(`Skipped : ${skipped}`);
    console.log("------------------------");
}

main().catch(console.error);