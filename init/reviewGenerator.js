const mongoose = require("mongoose");
const Listing = require("../models/listing");
const Review = require("../models/review");
const User = require("../models/user");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
}

const reviewComments = {
    5: [
        "Absolutely loved this place. Everything was perfect.",
        "Amazing stay. Highly recommended!",
        "Beautiful property with excellent hospitality.",
        "Would definitely stay here again.",
        "The experience exceeded my expectations.",
        "Very clean, comfortable, and peaceful.",
        "Fantastic location and wonderful host.",
        "One of the best places I have stayed.",
        "Everything matched the listing perfectly.",
        "Exceptional experience from check-in to check-out.",
        "Great value for money.",
        "The amenities were excellent.",
        "Perfect place for a relaxing vacation.",
        "Loved every moment of our stay.",
        "Highly recommended for families and couples.",
        "The rooms were spotless and spacious.",
        "Wonderful atmosphere and beautiful surroundings.",
        "Very comfortable beds and great service.",
        "An unforgettable experience.",
        "Five stars without any doubt."
    ],

    4: [
        "Really enjoyed our stay.",
        "Very good property with nice amenities.",
        "Everything was great except a few minor issues.",
        "Comfortable and clean accommodation.",
        "Would happily visit again.",
        "The location was very convenient.",
        "Friendly host and smooth check-in.",
        "Overall a pleasant experience.",
        "Nice place for a weekend getaway.",
        "Worth the price.",
        "The stay was enjoyable.",
        "Clean rooms and peaceful surroundings.",
        "Would recommend this property.",
        "The property was exactly as described.",
        "Very good experience overall.",
        "Comfortable stay with helpful staff.",
        "Good facilities and nice interiors.",
        "Enjoyed the hospitality.",
        "Satisfied with the experience.",
        "Almost perfect."
    ],

    3: [
        "Average stay overall.",
        "The property was okay.",
        "Decent experience but could be improved.",
        "Nothing exceptional, but acceptable.",
        "Expected a little more.",
        "Good location but average maintenance.",
        "The stay was neither great nor bad.",
        "Some facilities need improvement.",
        "Reasonable for the price.",
        "Mixed experience overall.",
        "The rooms were decent.",
        "Could have been cleaner.",
        "Service was average.",
        "Not bad, but not memorable.",
        "An okay choice for a short stay."
    ],

    2: [
        "The experience was below expectations.",
        "The property needs better maintenance.",
        "Cleanliness could be improved.",
        "Several amenities were not working.",
        "Not worth the price.",
        "The rooms looked older than expected.",
        "Service was disappointing.",
        "The stay was uncomfortable.",
        "Expected much better.",
        "Would probably not stay again.",
        "The location was fine but everything else was average.",
        "There were multiple issues during our stay.",
        "Communication could have been better.",
        "Overall disappointing.",
        "Needs significant improvement."
    ],

    1: [
        "Very disappointing experience.",
        "Would not recommend this place.",
        "The property was not as advertised.",
        "Poor cleanliness and maintenance.",
        "Terrible experience overall.",
        "The stay was extremely uncomfortable.",
        "Very poor service.",
        "Not worth the money.",
        "Many facilities were unavailable.",
        "I regret booking this property.",
        "One of my worst travel experiences.",
        "Completely disappointed.",
        "The room was not properly maintained.",
        "Would never stay here again.",
        "Extremely dissatisfied."
    ]
};

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomReviewCount() {
    return Math.floor(Math.random() * 6) + 3;
}

function getWeightedRating() {
    const random = Math.random();

    if (random < 0.45) return 5;
    if (random < 0.75) return 4;
    if (random < 0.90) return 3;
    if (random < 0.97) return 2;
    return 1;
}
async function generateReviews() {
    console.log("Removing existing reviews...");

    await Review.deleteMany({});

    const listings = await Listing.find({});
    await Listing.updateMany({}, { $set: { reviews: [] } });

    const users = await User.find({});

    let totalReviews = 0;

    for (const listing of listings) {

        const eligibleUsers = users.filter(
            (user) => user._id.toString() !== listing.owner.toString()
        );

        if (eligibleUsers.length === 0) continue;

        const shuffledUsers = [...eligibleUsers].sort(() => Math.random() - 0.5);

        const reviewCount = Math.min(
            getRandomReviewCount(),
            shuffledUsers.length
        );

        const reviewIds = [];

        for (let i = 0; i < reviewCount; i++) {

            const reviewer = shuffledUsers[i];

            const rating = getWeightedRating();

            const daysAgo = Math.floor(Math.random() * 365);

const review = new Review({
    author: reviewer._id,
    rating,
    comment: getRandomItem(reviewComments[rating]),
    createdAt: new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000),
});

            await review.save();

            reviewIds.push(review._id);
            totalReviews++;
        }

        listing.reviews = reviewIds;
        await listing.save();
    }

    console.log("--------------------------------");
    console.log(`Listings Processed : ${listings.length}`);
    console.log(`Reviews Generated  : ${totalReviews}`);
    console.log("--------------------------------");
}

generateReviews()
    .then(() => {
        console.log("Review generation completed.");
        mongoose.connection.close();
    })
    .catch((err) => {
        console.log(err);
        mongoose.connection.close();
    });