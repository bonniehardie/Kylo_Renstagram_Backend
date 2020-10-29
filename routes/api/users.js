const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { check } = require("express-validator");
const { asyncHandler,handleValidationErrors } = require("../../utils");
const { generateToken } = require("../../auth");
const { User, Photo, Comment, PhotoLike } = require("../../db/models");

User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
};

const userNameValidator = [
    check("userName")
    .exists({
        checkFalsy: true
    })
    .withMessage("Please provide a User Name")
    .isLength({
        min: 1,
        max: 50
    })
    .withMessage("User Name cannot be longer than 50 characters in length")
];
const emailValidator = [
    check("emailAddress")
    .exists({
        checkFalsy: true
    })
    .withMessage("Please provide an Email Address")
    .isEmail()
    .withMessage("Please provide a valid Email Address")
    .isLength({
        max: 150
    })
    .withMessage("Email Address cannot be longer than 50 characters in length")
    // .custom(async (emailAddress) => {
    //   let emailAlreadyInUse = await User.findOne({ where: { emailAddress } });
    //   if (emailAlreadyInUse) {
    //     throw new Error("Email Address is already in use");
    //   }
    // })
    // circle back to validators if time
];
const passwordValidator = [
    check("password")
    .exists({
        checkFalsy: true
    })
    .withMessage("Please provide a Password")
    .isLength({
        min: 8,
        max: 50
    })
    .withMessage("Password must be between 8 and 50 characters in length")

];

//create user
router.post(
    "/",
    userNameValidator,
    emailValidator,
    passwordValidator,
    handleValidationErrors,
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

        const user = await User.create({
            userName,
            emailAddress,
            hashedPassword,
            bio,
            avatarUrl
        });

        const token = generateToken(user);
        res.status(201).json({
            user: {
                id: user.id
            },
            token,
        });
    })
);

// get user by id for profile view
router.get(
    '/:id(\\d+)',
    // userNameValidator,
    // emailValidator,
    // passwordValidator,
    asyncHandler(async (req, res) => {
        const user = await User.findByPk(req.params.id)
        res.json(user);
    }));

// Create a JWT token for a user on login
router.post('/token', asyncHandler(async (req, res, next) => {
    const {
        userName,
        password
    } = req.body;
    const user = await User.findOne({
        where: {
            userName
        },
    });
    if (!user || !user.validatePassword(password)) {
      const err = new Error('Login Failed');
      err.title = '401 Login Failed';
      err.status = 401;
      err.errors = ['Invalid login credentials'];
      return next(err);
    }
    const token = generateToken(user);
    res.json({
        token,
        user
    });
}));

module.exports = router;
