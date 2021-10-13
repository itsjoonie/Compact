const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');

const { requireAuth } = require('../../utils/auth');
const { Booking, Review, User, Favorite } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation')

router.get('/', asyncHandler(async(req, res, next) => {
    const favorite = await Favorite.findAll();
    return res.json(favorite)
}))



router.post('/new', requireAuth, asyncHandler(async (req, res)=>{
    const {userId, hostingId, heart} = req.body;
    const favorite = await Favorite.create(req.body)
    return res.json(favorite);
}))

router.delete('/:id', requireAuth, asyncHandler(async(req, res) => {
    const favorite = await Favorite.findByPk(+req.params.id);
 
    // if(booking.userId === req.user.id) {
        await favorite.destroy();
        res.json({ message: "Favorite deleted!!" });
}))
    

module.exports = router;