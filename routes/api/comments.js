const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { check } = require("express-validator");
const { asyncHandler, handleValidationErrors } = require("../../utils");
const { generateToken } = require("../../auth");
const { Comment } = require("../../db/models");

// get all comments for a photo (params = photoId)
router.get(
    '/:id(\\d+)',
    asyncHandler(async (req, res) => {
        const comments = await Comment.findAll({ where: { photoId: req.params.id }})
    res.json(comments)
}));


// post a comment on a photo
// need to update userId to pull from store when I have store set up
router.post(
    '/:id(\\d+)',
    asyncHandler(async (req, res, next) => {
        const {
            comment,
        } = req.body;

        const newComment = await Comment.create({
            comment,
            photoId: parseInt(req.params.id),
            userId: parseInt(21)
        });
        res.status(201).json(newComment);
    })
);
module.exports = router;
