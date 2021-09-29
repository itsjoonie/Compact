// backend/routes/api/images.js
const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');

const { requireAuth } = require('../../utils/auth');
const { Image } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation')

router.get('/', asyncHandler(async(req, res, next) => {
    const images = await Image.findAll();
    return res.json(images)
}))


module.exports = router;