const Listing = require("../models/listing");
const getWeather = require("../utils/weather");
const getNearbyPlaces = require("../utils/nearbyExplorer");
const ai = require("../utils/gemini");
const buildPrompt = require("../utils/assistantPromptBuilder");





module.exports.askAssistant = async (req, res) => {

    try {

        const listing = await Listing.findById(req.params.id);

        if (!listing) {
            return res.status(404).json({
                answer: "Listing not found."
            });
        }

        // Get weather
        const weather = await getWeather(
            `${listing.location}, ${listing.country}`
        );

        // Get nearby places
        let groupedPlaces = {
            restaurants: [],
            cafes: [],
            attractions: [],
            hospitals: [],
            atms: [],
        };

        if (listing.geometry?.coordinates) {

            const [longitude, latitude] = listing.geometry.coordinates;

            const nearbyPlaces = await getNearbyPlaces(latitude, longitude);

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

        // Build prompt
        const prompt = buildPrompt(
            listing,
            weather,
            groupedPlaces,
            req.body.question
        );

        // Gemini
        const response = await ai.models.generateContent({

            model: "models/gemini-3.1-flash-lite",

            contents: prompt,

        });

        res.json({
            answer: response.text,
        });

    }

    catch (err) {

        console.error(err);

        res.status(500).json({

            answer: "Sorry, something went wrong while talking to the AI."

        });

    }

};