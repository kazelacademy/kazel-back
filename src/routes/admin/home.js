const home = require('express').Router();

const controller = require('../../controllers/admin/HomeController');

home.get('/', controller.getHome);

module.exports = home;
