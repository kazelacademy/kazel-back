const auth = require('express').Router();
const controller = require('../../controllers/api/AuthController');

auth.post('/signup', controller.signUp);
auth.get('/verify-account/:token', controller.verifyAccount);

module.exports = auth;
