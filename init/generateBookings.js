const mongoose = require("mongoose");

const Listing = require("../models/listing");
const Booking = require("../models/booking");
const User = require("../models/user");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

const NUMBER_OF_BOOKINGS_PER_LISTING = 4;
const CLEAR_EXISTING_BOOKINGS = true;
main()
    .then(() => {
        console.log("Connected to MongoDB");
        generateBookings();
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
}
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function overlaps(start1, end1, start2, end2) {
    return start1 < end2 && end1 > start2;
}

async function generateBookings() {

    if (CLEAR_EXISTING_BOOKINGS) {

        await Booking.deleteMany({});

        await Listing.updateMany(
            {},
            { $set: { bookings: [] } }
        );

        await User.updateMany(
            {},
            { $set: { bookings: [] } }
        );

        console.log("Old bookings cleared.\n");
    }

    const listings = await Listing.find()
    .populate("owner")
    .populate("bookings");

    const users = await User.find({
    username: {
        $in: [
            "demo",
            "emma",
            "sophia",
            "alex",
            "john",
        ],
    },
});

    console.log(`Listings : ${listings.length}`);
    console.log(`Users    : ${users.length}`);
let created = 0;

for (const listing of listings) {

    let bookingsCreated = 0;
    let attempts = 0;
    const bookedUsers = new Set();

    while (
        bookingsCreated < NUMBER_OF_BOOKINGS_PER_LISTING &&
        attempts < 50
    ) {

        attempts++;

        const availableUsers = users.filter(
    user =>
        !user._id.equals(listing.owner._id) &&
        !bookedUsers.has(user._id.toString())
);

if (availableUsers.length === 0) {
    break;
}

const guest =
    availableUsers[randomInt(0, availableUsers.length - 1)];

        const nights = randomInt(1, 5);

        const checkIn = new Date();

        checkIn.setDate(
            checkIn.getDate() - randomInt(0, 365)
        );

        const checkOut = new Date(checkIn);

        checkOut.setDate(checkOut.getDate() + nights);

        const guests = randomInt(1, listing.maxGuests);

        let conflict = false;

        for (const existing of listing.bookings) {

            if (
                existing.status === "Confirmed" &&
                overlaps(
                    checkIn,
                    checkOut,
                    existing.checkIn,
                    existing.checkOut
                )
            ) {
                conflict = true;
                break;
            }
        }

        if (conflict) continue;

        const booking = new Booking({
            listing: listing._id,
            user: guest._id,
            checkIn,
            checkOut,
            guests,
            nights,
            totalPrice: listing.price * nights + 1000,
            status: Math.random() < 0.95 ? "Confirmed" : "Cancelled",
        });

        await booking.save();

        listing.bookings.push(booking._id);

        guest.bookings.push(booking._id);

        await guest.save();
        bookedUsers.add(guest._id.toString());

        bookingsCreated++;
        created++;
    }

    await listing.save();

    console.log(
        `✔ ${listing.title} (${bookingsCreated}/${NUMBER_OF_BOOKINGS_PER_LISTING})`
    );
}

console.log("\n-----------------------");
console.log(`Bookings Created : ${created}`);
console.log("-----------------------");

await mongoose.connection.close();

}