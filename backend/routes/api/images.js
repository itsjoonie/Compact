// backend/routes/api/images.js
const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');

const { multipleMulterUpload, multiplePublicFileUpload } = require("../../awsS3");
const { requireAuth } = require('../../utils/auth');
const { Image } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation')


router.get('/', asyncHandler(async(req, res, next) => {
    const images = await Image.findAll();
    return res.json(images)
}))

router.post('/new', singleMulterUpload("image"), requireAuth, asyncHandler( async(req, res) =>{
    
    const {hostingId, pic4, pic5, pic6} = req.body;
    const pic1 = await singlePublicFileUpload(req.file);
    const pic2 = await singlePublicFileUpload(req.file);
    const pic3 = await singlePublicFileUpload(req.file);
    const image = await Image.create({
        hostingId,
        pic1,
        pic2,
        pic3,
        pic4,
        pic5,
        pic6
    });
    return res.json({image});
}))


module.exports = router;