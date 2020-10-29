const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { check } = require("express-validator");
const { asyncHandler, handleValidationErrors } = require("../../utils");
const { generateToken } = require("../../auth");
const { Photo } = require("../../db/models");

// get all photos of user (params = userId)
router.get(
    '/:id(\\d+)',
    asyncHandler(async (req, res) => {
        const photos = await Photo.findAll({ where: { userId: req.params.id }})
        // console.log(photos[1])
        // const photosIds = photos.filter(photo => (photo === id))
        // photosIds.forEach(id => {
        //     const comments = await Comment.findAll({where: { photoId: id}})
        // })
        // for (let i = 0; i < photos.length; i++) {
        //     const comments = await Comment.findAll({
        //         where: {
        //             photoId: photos[i].id
        //         }
        //     });
        // }
        res.json(photos)
        // res.json({photos, comments});
}));

// get specific photo (params = photoId)
router.get(
    '/photo/:id(\\d+)',
    asyncHandler(async (req, res) => {
        const photo = await Photo.findByPk(req.params.id)
        res.json(photo);
}));

// post a photo
// need to update userId to pull from store when I have store set up
router.post(
    "/",
    asyncHandler(async (req, res, next) => {
        const {
            photoUrl,
            caption,
        } = req.body;

        const photo = await Photo.create({
            photoUrl,
            caption,
            userId: parseInt(21)
        });
        res.status(201).json(photo);
    })
);


module.exports = router;
