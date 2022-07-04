const swaggerJsdoc = require('swagger-jsdoc');
require('dotenv/config');

const user = require('./schemas/user');

// https://swagger.io/specification/#oasObject
exports.openapiSpecification = swaggerJsdoc({
  apis: ['./src/routes/api/*.js'],
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Kazel API',
      version: '1.0.0'
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}/api/${process.env.API_VERSION}`,
        description: 'Local server'
      }
    ],
    components: {
      schemas: {
        ...user,
      },
      securitySchemes: {
        bearerAuthJWT: {
          type: 'http',
          scheme: 'Bearer',
        },
      },
    },
  },
});
