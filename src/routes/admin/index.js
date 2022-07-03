const admin = require('express').Router();

const home = require('./home');
const auth = require('./auth');

admin.use('/', home);
admin.use('/auth', auth);

module.exports = admin;
