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



module.exports = router;