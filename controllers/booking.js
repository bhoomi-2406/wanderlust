const Booking = require("../models/booking");
const Listing = require("../models/listing");
const User = require("../models/user");

module.exports.createBooking = async (req, res) => {
    console.log("Booking route reached");
    const { id } = req.params;

    const listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error", "Listing not found.");
        return res.redirect("/listings");
    }

    if (listing.owner.equals(req.user._id)) {
        req.flash("error", "You cannot book your own listing.");
        return res.redirect(`/listings/${id}`);
    }

    const { checkIn, checkOut, guests } = req.body;

    const start = new Date(checkIn);
    const end = new Date(checkOut);

    const nights = Math.ceil(
        (end - start) / (1000 * 60 * 60 * 24)
    );
const existingBookings = await Booking.find({
    listing: listing._id,
    status: "Confirmed",
});

for (const existing of existingBookings) {

    if (
        start < existing.checkOut &&
        end > existing.checkIn
    ) {
        req.flash(
            "error",
            "These dates are already booked. Please choose different dates."
        );

        return res.redirect(`/listings/${id}`);
    }

}
    if (nights <= 0) {
        req.flash("error", "Invalid booking dates.");
        return res.redirect(`/listings/${id}`);
    }

    const totalPrice = nights * listing.price + 1000;

    const booking = new Booking({
        listing: listing._id,
        user: req.user._id,
        checkIn: start,
        checkOut: end,
        guests,
        nights,
        totalPrice,
    });

    await booking.save();

    listing.bookings.push(booking._id);
    await listing.save();

    const user = await User.findById(req.user._id);
    user.bookings.push(booking._id);
    await user.save();

    req.flash("success", "Booking confirmed!");

    res.redirect("/bookings");
};

module.exports.index = async (req, res) => {

    const user = await User.findById(req.user._id)
        .populate({
            path: "bookings",
            populate: {
                path: "listing",
            },
        });

    res.render("bookings/index", {
        bookings: user.bookings,
    });

};

module.exports.cancelBooking = async (req, res) => {

    const { bookingId } = req.params;

    const booking = await Booking.findById(bookingId);

    if (!booking) {
        req.flash("error", "Booking not found.");
        return res.redirect("/bookings");
    }

    await User.findByIdAndUpdate(booking.user, {
        $pull: {
            bookings: booking._id,
        },
    });

    await Listing.findByIdAndUpdate(booking.listing, {
        $pull: {
            bookings: booking._id,
        },
    });

    await Booking.findByIdAndDelete(bookingId);

    req.flash("success", "Booking cancelled successfully.");

    res.redirect("/bookings");
};