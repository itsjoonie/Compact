// backend/routes/api/index.js

const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const hostingsRouter = require('./hostings.js');
const imagesRouter = require('./images.js')
const bookingsRouter = require('./bookings')




router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/hostings', hostingsRouter);
router.use('/images', imagesRouter);
router.use('/bookings', bookingsRouter)

module.exports = router;