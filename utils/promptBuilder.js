module.exports = function buildPrompt(data, locationInfo, listing, weather) {

return `
You are an expert travel planner.

Create a personalized travel itinerary.

Destination: ${data.destination}
Days: ${data.days}
Budget: ${data.budget}
Travelers: ${data.travelers}
Interests: ${(data.interests || []).join(", ")}
Additional Preferences: ${data.preferences || "None"}

Location Information:

Display Name: ${locationInfo?.displayName || "Unknown"}

Latitude: ${locationInfo?.latitude || "Unknown"}

Longitude: ${locationInfo?.longitude || "Unknown"}

Accommodation Information:

Title: ${listing?.title || "Not selected"}

Description: ${listing?.description || "Not available"}

Price Per Night: ${listing?.price || "Unknown"}

Location: ${listing?.location || "Unknown"}

Country: ${listing?.country || "Unknown"}

Max Guests: ${listing?.maxGuests || "Unknown"}

Bedrooms: ${listing?.bedrooms || "Unknown"}

Bathrooms: ${listing?.bathrooms || "Unknown"}

Amenities:
${listing?.amenities?.join(", ") || "None"}

Current Weather:

Temperature: ${weather?.temperature ?? "Unknown"}°C

Feels Like: ${weather?.feelsLike ?? "Unknown"}°C

Condition: ${weather?.description ?? "Unknown"}

Travel Score: ${weather?.travelScore ?? "Unknown"}/10 (${weather?.travelStatus ?? "Unknown"})

Travel Tip:
${weather?.travelTip ?? "Not available"}

Packing Suggestions:
${weather?.packing?.join(", ") || "None"}

Recommended Activities:
${weather?.activities?.join(", ") || "None"}

3-Day Forecast:

${weather?.forecast?.map(day =>
`${day.date}: ${day.temperature}°C, ${day.description}`
).join("\n") || "Not available"}

IMPORTANT:

Return ONLY valid JSON.

Do not use markdown.

Do not use triple backticks.

Do not explain anything.

Use the current weather and 3-day forecast to schedule outdoor and indoor activities intelligently.

Avoid outdoor activities during rain or storms whenever possible.

Use the travel score when deciding the quality of the trip.

Use the packing suggestions while generating the packing list.
Also generate a field called "weatherInsight".

This should briefly explain (2–3 sentences) how the current weather, travel score, and forecast influenced the itinerary planning.

For example:
"Outdoor activities are scheduled on Day 2 because the forecast predicts clear skies and pleasant temperatures. Indoor attractions are planned on rainy periods to maximize the travel experience."

Use exactly this structure:

{
  "destination": "",
  "duration": "",
  "budget": "",
  "summary": "",
  "days": [
    {
      "title": "",
      "morning": "",
      "afternoon": "",
      "evening": ""
    }
  ],
  "packing": [],
  "foods": [],
  "tips": [],
  "estimatedBudget": ""
  "foods": [],
"tips": [],
"weatherInsight": "",
"estimatedBudget": ""
}
`;

};