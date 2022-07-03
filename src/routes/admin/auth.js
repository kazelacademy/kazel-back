const auth = require('express').Router();

const controller = require('../../controllers/admin/AuthController');

auth.get('/', (_, res) => res.redirect('/admin/auth/login'));
auth.get('/login', controller.getLogin);

module.exports = auth;
