const axios = require("axios");

async function getCoordinates(location) {
    try {
        const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(location)}&format=json&limit=1`;

       const response = await axios.get(url, {
    headers: {
        "User-Agent": "WanderLust",
    },
});

console.log(response.data[0]);

        if (response.data.length === 0) {
            return null;
        }

        return {
            type: "Point",
            coordinates: [
                parseFloat(response.data[0].lon),
                parseFloat(response.data[0].lat),
            ],
        };
    } 
    catch (err) {
    console.log("Geocoding Error:");
    console.log(err.response?.data || err.message);
    return null;
}
    }


module.exports = getCoordinates;