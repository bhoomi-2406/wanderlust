const Listing = require("../models/listing");
const Booking = require("../models/booking");
const Review = require("../models/review");
module.exports.renderDashboard = async (req, res) => {

    const listings = await Listing.find({ owner: req.user._id })
        .populate("reviews");

    const listingIds = listings.map(listing => listing._id);

    const bookings = await Booking.find({
    listing: { $in: listingIds },
    status: "Confirmed",
})
.populate("user", "username")
.populate("listing", "title")
.sort({ createdAt: -1 });

    const totalRevenue = bookings.reduce(
        (sum, booking) => sum + booking.totalPrice,
        0
    );
    const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

const monthlyRevenue = new Array(12).fill(0);

bookings.forEach((booking) => {
    const month = booking.checkIn.getMonth();
    monthlyRevenue[month] += booking.totalPrice;
});
const listingRevenue = {};

bookings.forEach((booking) => {
    const listingId = booking.listing._id.toString();

    if (!listingRevenue[listingId]) {
        listingRevenue[listingId] = {
            title: booking.listing.title,
            revenue: 0,
        };
    }

    listingRevenue[listingId].revenue += booking.totalPrice;
});

const highestRevenueListing =
    Object.values(listingRevenue).sort(
        (a, b) => b.revenue - a.revenue
    )[0] || null;

    let totalRating = 0;
    let reviewCount = 0;
const mostBookedListing =
    listings
        .map((listing) => ({
            title: listing.title,
            bookings: listing.bookings.length,
        }))
        .sort((a, b) => b.bookings - a.bookings)[0] || null;

const highestRatedListing =
    listings
        .map((listing) => {

            const total =
                listing.reviews.reduce(
                    (sum, review) => sum + review.rating,
                    0
                );

            const average =
                listing.reviews.length
                    ? total / listing.reviews.length
                    : 0;

            return {
                title: listing.title,
                rating: average,
            };

        })
        .sort((a, b) => b.rating - a.rating)[0] || null;
    listings.forEach(listing => {
        listing.reviews.forEach(review => {
            totalRating += review.rating;
            reviewCount++;
        });
    });

    const averageRating =
        reviewCount > 0
            ? (totalRating / reviewCount).toFixed(1)
            : "0.0";
            const recentReviews = await Review.find({
    _id: {
        $in: listings.flatMap(listing => listing.reviews.map(review => review._id))
    }
})
.populate("author", "username")
.sort({ createdAt: -1 })
.limit(5);

   res.render("dashboard/index", {
    listings,
    bookings,
    recentReviews,
    totalBookings: bookings.length,
    totalRevenue,
    averageRating,
    monthNames,
    monthlyRevenue,
    highestRevenueListing,
    mostBookedListing,
highestRatedListing,
});

};