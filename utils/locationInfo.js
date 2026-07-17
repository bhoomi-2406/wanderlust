const axios = require("axios");

module.exports = async function getLocationInfo(destination) {

    try {

        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(destination)}&limit=1`;

        const { data } = await axios.get(url, {
            headers: {
                "User-Agent": "Wanderlust"
            }
        });

        if (!data.length) {
            return null;
        }

        return {
            latitude: data[0].lat,
            longitude: data[0].lon,
            displayName: data[0].display_name
        };

    } catch (err) {

        console.log(err);

        return null;

    }

};