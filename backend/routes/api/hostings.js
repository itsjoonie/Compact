// backend/routes/api/hosting.js
const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');

const { requireAuth } = require('../../utils/auth');
const { Hosting } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation')


//get all hostings
router.get('/', asyncHandler(async (req, res, next) => { 
   const hostings = await Hosting.findAll();
   return res.json(hostings);
}));


//get one hosting 
router.get('/:id', asyncHandler(async (req, res) => {
    const hosting = await Hosting.findByPk(req.params.id);
    return res.json(hosting);
}));

router.post('/new', requireAuth, asyncHandler(async (req, res) => {
   const {userId, title, description, city, state, country, guest, pet, bed, bathroom, price} = req.body;
   const hosting = await Hosting.create(req.body);
   return res.json({hosting})
}))

router.put('/:id', requireAuth, asyncHandler(async (req, res, next) => {
   const id = req.params.id;
   const hosting = await Hosting.findByPk(id);
   const {userId, title, description, city, state, country, guest, pet, bed, bathroom, price} = req.body;
   const updateHosting= await Hosting.update(req.body);
   return res.json(updateHosting);
}));


router.delete('/:id', requireAuth, asyncHandler(async (req, res, next) =>{
   const hosting = await Hosting.findByPk(+req.params.id);
    hosting.destroy();
    return res.json("successfully deleted");

}))
module.exports = router;