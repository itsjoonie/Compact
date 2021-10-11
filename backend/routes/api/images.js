// backend/routes/api/images.js
const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');

const { multipleMulterUpload, singlePublicFileUpload } = require("../../awsS3");
const { requireAuth } = require('../../utils/auth');
const { Image } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation')


router.get('/', asyncHandler(async(req, res, next) => {
    const images = await Image.findAll();
    return res.json(images)
}))

router.post('/new', multipleMulterUpload("images"), requireAuth, asyncHandler( async(req, res) =>{
    
    const {hostingId} = req.body;

    console.log("THIS IS REQ FILESSSS", req.files)
    const pic1 = await singlePublicFileUpload(req.files[0]);
    const pic2 = await singlePublicFileUpload(req.files[1]);
    const pic3 = await singlePublicFileUpload(req.files[2]);

    const image = await Image.create({
        hostingId,
        pic1,
        pic2,
        pic3,
    });


    return res.json(image);
}))

router.put("/:id", multipleMulterUpload("images"), requireAuth, asyncHandler( async(req, res) =>{
    const id = req.params.id;
    console.log("WHAT IS THIS ID", id)
    const {hostingId} = req.body;
    console.log("THIS IS REQ FILESSSS", req.files)
    const pic1 = await singlePublicFileUpload(req.files[0]);
    const pic2 = await singlePublicFileUpload(req.files[1]);
    const pic3 = await singlePublicFileUpload(req.files[2]);

    const image = await Image.findByPk(req.params.id)

    const updateImage = await image.update({
        pic1,
        pic2,
        pic3,
    })

    return res.json(updateImage)

}));

module.exports = router;