const axios = require("axios");

const API_KEY = process.env.WEATHER_API_KEY;

async function getWeather(city) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

        const response = await axios.get(url);
        const forecastUrl =
    `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

const forecastResponse = await axios.get(forecastUrl);
const forecast = [];

const dailyForecasts = {};

forecastResponse.data.list.forEach((item) => {

    const date = item.dt_txt.split(" ")[0];

    if (!dailyForecasts[date]) {
        dailyForecasts[date] = item;
    }

});

Object.values(dailyForecasts)
    .slice(1, 4)
    .forEach((day) => {

        forecast.push({
            date: day.dt_txt.split(" ")[0],
            temperature: Math.round(day.main.temp),
            description: day.weather[0].description,
            icon: day.weather[0].icon,
        });

    });

       let travelTip = "Enjoy your trip!";
       
       

const weatherMain = response.data.weather[0].main;
const temp = response.data.main.temp;
// ---------- Travel Score ----------

let travelScore = 5;
let scoreBreakdown = [];

// Weather condition
switch (weatherMain) {

    case "Clear":
        travelScore += 3;
        scoreBreakdown.push({
            type: "positive",
            text: "Clear weather (+3)"
        });
        break;

    case "Clouds":
        travelScore += 2;
        scoreBreakdown.push({
            type: "positive",
            text: "Pleasant cloudy weather (+2)"
        });
        break;

    case "Drizzle":
        travelScore += 1;
        scoreBreakdown.push({
            type: "positive",
            text: "Light drizzle (+1)"
        });
        break;

    case "Rain":
        travelScore -= 1;
        scoreBreakdown.push({
            type: "negative",
            text: "Rainy weather (-1)"
        });
        break;

    case "Snow":
        travelScore += 1;
        scoreBreakdown.push({
            type: "positive",
            text: "Snow experience (+1)"
        });
        break;

    case "Thunderstorm":
        travelScore -= 3;
        scoreBreakdown.push({
            type: "negative",
            text: "Thunderstorm (-3)"
        });
        break;
}

// Temperature
if (temp >= 18 && temp <= 28) {

    travelScore += 2;

    scoreBreakdown.push({
        type: "positive",
        text: "Ideal temperature (+2)"
    });

}
else if (temp >= 10 && temp < 18) {

    travelScore += 1;

    scoreBreakdown.push({
        type: "positive",
        text: "Cool weather (+1)"
    });

}
else if (temp > 35 || temp < 0) {

    travelScore -= 2;

    scoreBreakdown.push({
        type: "negative",
        text: "Extreme temperature (-2)"
    });

}

// Wind
const wind = response.data.wind.speed;

if (wind > 10) {

    travelScore -= 1;

    scoreBreakdown.push({
        type: "negative",
        text: "Strong winds (-1)"
    });

}
else {

    scoreBreakdown.push({
        type: "positive",
        text: "Calm wind conditions"
    });

}

// Humidity
const humidity = response.data.main.humidity;

if (humidity >= 35 && humidity <= 70) {

    travelScore += 1;

    scoreBreakdown.push({
        type: "positive",
        text: "Comfortable humidity (+1)"
    });

}
else {

    scoreBreakdown.push({
        type: "negative",
        text: "High humidity"
    });

}

// Keep score between 1 and 10
travelScore = Math.max(1, Math.min(10, travelScore));
let travelStatus = "";

if (travelScore >= 9) {
    travelStatus = "Excellent";
}
else if (travelScore >= 7) {
    travelStatus = "Good";
}
else if (travelScore >= 5) {
    travelStatus = "Moderate";
}
else {
    travelStatus = "Poor";
}

if (weatherMain === "Rain" || weatherMain === "Drizzle") {
    travelTip = "🌧 Carry an umbrella and waterproof shoes.";
}
else if (weatherMain === "Snow") {
    travelTip = "❄ Wear warm clothes and be cautious of slippery roads.";
}
else if (weatherMain === "Thunderstorm") {
    travelTip = "⛈ Outdoor activities are not recommended today.";
}
else if (temp >= 35) {
    travelTip = "☀ Stay hydrated and avoid long outdoor activities during the afternoon.";
}
else if (temp <= 10) {
    travelTip = "🧥 Pack warm clothing. Temperatures are quite low.";
}
else if (weatherMain === "Clear") {
    travelTip = "🌞 Perfect weather for sightseeing and outdoor adventures!";
}
else if (weatherMain === "Clouds") {
    travelTip = "☁ Pleasant weather for exploring the destination.";
}
let packing = [];
let activities = [];

// Packing suggestions
if (temp <= 10) {
    packing.push("🧥 Warm Jacket", "🧤 Gloves", "🥾 Boots");
}
else if (temp >= 30) {
    packing.push("🕶 Sunglasses", "🧴 Sunscreen", "🧢 Cap");
}
else {
    packing.push("👟 Comfortable Shoes", "🧥 Light Jacket");
}

if (weatherMain === "Rain" || weatherMain === "Drizzle") {
    packing.push("☂ Umbrella");
}

if (weatherMain === "Snow") {
    packing.push("🧣 Scarf");
}

// Activity suggestions
if (weatherMain === "Clear") {
    activities = [
        "🏞 Sightseeing",
        "🥾 Hiking",
        "📸 Photography"
    ];
}
else if (weatherMain === "Clouds") {
    activities = [
        "🚶 City Walk",
        "☕ Café Hopping",
        "🛍 Shopping"
    ];
}
else if (weatherMain === "Rain") {
    activities = [
        "🏛 Museum Visit",
        "☕ Local Cafés",
        "🍽 Indoor Dining"
    ];
}
else if (weatherMain === "Snow") {
    activities = [
        "⛷ Snow Activities",
        "📸 Winter Photography",
        "🔥 Cozy Indoor Cafés"
    ];
}
let weatherTheme = "sunny";

switch (weatherMain) {

    case "Clear":
        weatherTheme = "sunny";
        break;

    case "Clouds":
        weatherTheme = "cloudy";
        break;

    case "Rain":
    case "Drizzle":
        weatherTheme = "rainy";
        break;

    case "Snow":
        weatherTheme = "snowy";
        break;

    case "Thunderstorm":
        weatherTheme = "storm";
        break;

    default:
        weatherTheme = "default";
}
return {
    temperature: response.data.main.temp,
    feelsLike: response.data.main.feels_like,
    humidity: response.data.main.humidity,
    windSpeed: response.data.wind.speed,
    description: response.data.weather[0].description,
    icon: response.data.weather[0].icon,
    city: response.data.name,
    country: response.data.sys.country,
    travelTip,
packing,
activities,
    forecast,
    travelScore,
travelStatus,
    scoreBreakdown,
    weatherTheme
};

    } catch (err) {
        console.error("Weather API Error:", err.response?.data || err.message);
        return null;
    }
}

module.exports = getWeather;