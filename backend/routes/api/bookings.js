const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');

const { requireAuth } = require('../../utils/auth');
const { Booking, Review, User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation')


router.get('/', asyncHandler(async(req, res, next) => {
    const bookings = await Booking.findAll();
    return res.json(bookings)
}))

router.get('/:id', asyncHandler(async(req, res, next) =>{
    const id = req.params.id
    const booking = await Booking.findByPk(id, {
            include: [Review, User]
            });
    return res.json(booking)
}))

router.post('/new', requireAuth, asyncHandler(async (req, res)=>{
    const {hostingId, userId, guest, startDate, endDate} = req.body;
    const booking = await Booking.create(req.body)
    return res.json(booking);
}))

router.delete('/:id', requireAuth, asyncHandler(async(req, res) => {
    const booking = await Booking.findByPk(+req.params.id);
    // if(booking.userId === req.user.id) {
        await booking.destroy();
        res.json({ message: "Booking deleted!!" });
    

}))
module.exports = router;