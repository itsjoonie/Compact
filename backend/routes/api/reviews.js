const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');

const { requireAuth } = require('../../utils/auth');
const { Hosting, Image, User, Booking, Review } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const booking = require('../../db/models/booking');
const review = require('../../db/models/review');
const { Router } = require('express');

router.get('/:id', asyncHandler(async(req, res, next) =>{
    const id = req.params.id
    const review = await Review.findByPk(id, {
            include: [Booking, User]
            });
    return res.json(review)
}))

router.get('/', asyncHandler(async(req, res, next) => {
    const reviews = await Review.findAll({
        include: [User, {
            model:Booking,
            include:{
                model:Hosting
            }
        }],
    });
    return res.json(reviews)
    
}))

router.post('/new', requireAuth, asyncHandler(async (req, res) =>{
    const {userId, bookingId, starRating, reviewText} = req.body
    const review = await Review.create(req.body);
    return res.json({review})
}))

router.put('/:id', requireAuth, asyncHandler(async (req, res, next) =>{
    const id = req.params.id;
    const {userId, bookingId, starRating, reviewText} = req.body;

    const review = await Review.findByPk(req.params.id, {
        include: [Booking, User]
    });

    const updateReview = await review.update({
        userId, bookingId, starRating, reviewText
    })

    return res.json(updateReview)
}));

router.delete('/:id', requireAuth, asyncHandler(async(req, res) =>{
    const id = req.params.id
    const review = await Review.findByPk(+id);
    await review.destory();
    res.json({message: "Your review has been deleted!"})
}))

module.exports = router;