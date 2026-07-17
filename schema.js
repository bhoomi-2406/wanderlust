const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    listing : Joi.object({
title: Joi.string().required() , 
description: Joi.string().required() , 
location : Joi.string().required() , 
country : Joi.string().required() , 
price: Joi.number().required(),
maxGuests: Joi.number().integer().min(1).required(),

bedrooms: Joi.number().integer().min(1).required(),

bathrooms: Joi.number().integer().min(1).required(), 
image: Joi.object({
    url: Joi.string().allow("", null),
    filename: Joi.string().allow("", null)
}),
category: Joi.string()
    .valid(
        "Trending",
        "Iconic Cities",
        "Mountains",
        "Castles",
        "Arctic",
        "Camping",
        "Farms",
        "Amazing Pools",
        "Beach",
        "Forest",
        "Historic"
    )
    .required(),
    amenities: Joi.array().items(Joi.string()),

featured: Joi.boolean(),
    }).required()
})

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required(),
    }).required()
})