const auth = require('express').Router();
const controller = require('../../controllers/api/AuthController');

auth.post('/signup', controller.signUp);

module.exports = auth;
