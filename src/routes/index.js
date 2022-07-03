const router = require('express').Router();
const admin = require('./admin');
const api = require('./api');

router.use(`/api/${process.env.API_VERSION}`, api);
router.use('/admin', admin);

module.exports = router;
