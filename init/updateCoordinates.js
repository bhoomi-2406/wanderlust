const mongoose = require("mongoose");
const axios = require("axios");
const Listing = require("../models/listing");

require("dotenv").config();
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
    await mongoose.connect(MONGO_URL);
    console.log("✅ Connected to MongoDB");
}

main()
    .then(updateCoordinates)
    .catch(console.error);
    async function getCoordinates(query) {

    const apiKey = process.env.GEOAPIFY_API_KEY;

    const url = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(query)}&limit=1&apiKey=${apiKey}`;

    const response = await axios.get(url);

    if (response.data.features.length === 0) {
        return null;
    }

    const feature = response.data.features[0];

    return {
        longitude: feature.properties.lon,
        latitude: feature.properties.lat,
    };

}
async function updateCoordinates() {

    const listings = await Listing.find();

    console.log(`Found ${listings.length} listings\n`);

    for (const listing of listings) {

        try {

            let coordinates = await getCoordinates(
                `${listing.title}, ${listing.location}, ${listing.country}`
            );

            if (!coordinates) {

                coordinates = await getCoordinates(
                    `${listing.location}, ${listing.country}`
                );

            }

            if (!coordinates) {

                console.log(`❌ Could not find ${listing.title}`);
                continue;

            }

            listing.geometry = {
                type: "Point",
                coordinates: [
                    coordinates.longitude,
                    coordinates.latitude,
                ],
            };

            await listing.save();

            console.log(
                `✅ ${listing.title} -> ${coordinates.latitude}, ${coordinates.longitude}`
            );

        }

       catch (err) {
    console.log(`❌ Error updating ${listing.title}`);
    console.log(err.response?.data || err.message);
}

    }

    console.log("\n🎉 Finished updating all listings.");

    mongoose.connection.close();

}