// backend/routes/api/hosting.js
const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');

const { requireAuth } = require('../../utils/auth');
const { Hosting, Image, User, Booking, Review, Favorite } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const booking = require('../../db/models/booking');
const review = require('../../db/models/review');


//get all hostings
router.get('/', asyncHandler(async (req, res, next) => { 
   const hostings = await Hosting.findAll({
       include:[Image, User, Booking]
      });
   return res.json(hostings);

}));


//get one hosting 
router.get('/:id', asyncHandler(async (req, res) => {
    const hosting = await Hosting.findByPk(req.params.id, {

       include:[Image, User]

    });
    return res.json(hosting);
}));

router.post('/new', requireAuth, asyncHandler(async (req, res) => {
   const {userId, title, description, city, state, country, guest, pet, bed, bathroom, price} = req.body;
   const hosting = await Hosting.create(req.body);
   return res.json({hosting})
}))

router.put('/:id', requireAuth, asyncHandler(async (req, res, next) => {
   const id = req.params.id;
      const {title, description, city, state, country, guest, pet, bed, bathroom, price} = req.body;

   const hosting = await Hosting.findByPk(req.params.id, {

       include:[Image, User]

    });
   const updateHosting= await hosting.update({title, description, city, state, country, guest, pet, bed, bathroom, price});
   return res.json(updateHosting);
}));


router.delete('/:id', requireAuth, asyncHandler(async (req, res, next) =>{
   const hosting = await Hosting.findByPk(+req.params.id, {
       include:[Image, User, Booking] 
    });
    hosting.destroy();
    return res.json("successfully deleted");

}))
module.exports = router;