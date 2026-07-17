const mongoose = require("mongoose");

const Listing = require("../models/listing");
const User = require("../models/user");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB");

    await assignOwners();

    mongoose.connection.close();
}

async function assignOwners() {

    const usernames = [
        "demo",
        "alex",
        "sophia",
        "john",
        "emma",
    ];

    const users = [];

    for (let username of usernames) {

        const user = await User.findOne({ username });

        if (!user) {
            console.log(`User "${username}" not found`);
            return;
        }

        users.push(user);
    }

    const listings = await Listing.find({});

    let index = 0;

    for (let listing of listings) {

        listing.owner = users[index]._id;

        await listing.save();

        console.log(
            `${listing.title}  →  ${users[index].username}`
        );

        index = (index + 1) % users.length;
    }

    console.log(`\n${listings.length} listings reassigned.`);
}

main().catch(console.error);