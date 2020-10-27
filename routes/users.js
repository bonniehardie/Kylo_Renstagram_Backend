
const express = require("express");
const userRouter = express.Router();
const bcrypt = require("bcryptjs");

const { getUserToken, requireAuth } = require("../auth");
const { check } = require("express-validator");
const { asyncHandler, handleValidationErrors } = require("../utils");
const db = require("../db/models");
const { use } = require("../app");
const { User } = db;

User.prototype.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.hashedPassword.toString());
};

const validateUserName = check("userName")
  .exists({ checkFalsy: true })
  .withMessage("Please provide a valid User Name");

const validateEmailAddressAndPassword = [
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a valid Password"),
  check("confirmedPassword")
    .exists({ checkFalsy: true })
    .equals("confirmedPassword", "password")
    .withMessage("Password and Confirmed must match"),
  check("emailAddress")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid Email Address"),
];
const validateUserNameAndPassword = [
  check("userName")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a valid User Name"),
  check("hashedPassword")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a valid Password"),
];

userRouter.post(
  "/",
  handleValidationErrors,
  validateUserName,
  validateEmailAddressAndPassword,
  asyncHandler(async (req, res, next) => {
    const {
      userName,
      emailAddress,
      password,
      confirmedPassword,
      bio,
      avatarUrl
    } = req.body;

    if (password !== confirmedPassword) {
      const err = new Error("Sign Up Failed");
      err.status = 401;
      err.title = "Sign Up failed";
      err.errors = "Password and Confirmed must match";
      err.confirm = false;
      return next(err);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ userName, emailAddress, hashedPassword, bio, avatarUrl });

    const token = getUserToken(user);
    res.status(201).json({
      user: { id: user.id },
      token,
    });
  })
);

module.exports = router;
