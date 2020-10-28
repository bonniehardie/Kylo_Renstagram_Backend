const router = require('express').Router();
const userRouter = require('./api/user');

router.use('/user', userRouter);

module.exports = router;
