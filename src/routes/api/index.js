const swaggerUi = require('swagger-ui-express');
const api = require('express').Router();
const auth = require('./auth');

const {
  openapiSpecification,
} = require('../../../docs/swagger');

api.use('/docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));
api.use('/auth', auth);

module.exports = api;
