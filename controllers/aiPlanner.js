const { marked } = require("marked");
const ai = require("../utils/gemini");
const buildPrompt = require("../utils/promptBuilder");
const getLocationInfo = require("../utils/locationInfo");
const Listing = require("../models/listing");
const getWeather = require("../utils/weather");

module.exports.renderPlanner = (req, res) => {

    res.render("ai/planner", {
        listing: null,
    });

};

module.exports.renderListingPlanner = async (req, res) => {

    const listing = await Listing.findById(req.params.id);

    if (!listing) {
        return res.redirect("/listings");
    }

    res.render("ai/planner", {
        listing,
    });

};

module.exports.generateTrip = async (req, res) => {
    try {
       let listing = null;

if (req.body.listingId) {
    listing = await Listing.findById(req.body.listingId);
}

const locationInfo = await getLocationInfo(req.body.destination);
const weather = await getWeather(req.body.destination);
const prompt = buildPrompt(req.body, locationInfo, listing,  weather);



        const response = await ai.models.generateContent({
            model: "models/gemini-3.1-flash-lite",
            contents: prompt,
        });

        const itinerary = JSON.parse(response.text);

res.render("ai/result", {
    itinerary,
});

    } catch (err) {
        console.error("Gemini Error:", err);

        res.status(500).send(`
<h2>Gemini Error</h2>
<pre>${err.stack || err.message}</pre>
`);
    }
};