const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { check } = require("express-validator");
const { asyncHandler, handleValidationErrors } = require("../../utils");
const { generateToken } = require("../../auth");
const { User, Photo, Comment, PhotoLike } = require("../../db/models");

router.get(
    '/:id(\\d+)',
    asyncHandler(async (req, res) => {
        const photo = await Photo.findByPk(req.params.id)
        res.json(photo);
}));

module.exports = router;
