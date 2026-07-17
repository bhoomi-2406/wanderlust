const axios = require("axios");

const API_KEY = process.env.GEOAPIFY_API_KEY;

async function getNearbyPlaces(lat, lon) {
    try {

        const categories = [
            "catering.restaurant",
            "catering.cafe",
            "tourism.attraction",
            "healthcare.hospital",
            "service.financial.atm"
        ].join(",");

        const url =
            `https://api.geoapify.com/v2/places?` +
            `categories=${categories}` +
            `&filter=circle:${lon},${lat},3000` +
            `&bias=proximity:${lon},${lat}` +
            `&limit=40` +
            `&apiKey=${API_KEY}`;

        const response = await axios.get(url);

        return response.data.features;

    } catch (err) {

        console.error(
            "Geoapify Error:",
            err.response?.data || err.message
        );

        return [];
    }
}

module.exports = getNearbyPlaces;