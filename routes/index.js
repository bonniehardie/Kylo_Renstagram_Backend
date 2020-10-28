const router = require('express').Router();
const userRouter = require('./api/user');

router.use('/user', userRouter);
router.use('/photo', photoRouter);

module.exports = router;
