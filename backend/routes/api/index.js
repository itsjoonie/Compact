// backend/routes/api/index.js

const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const hostingsRouter = require('./hostings.js');




router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/hostings', hostingsRouter);

module.exports = router;