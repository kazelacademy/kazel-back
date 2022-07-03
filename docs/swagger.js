const swaggerJsdoc = require('swagger-jsdoc');

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
        url: 'http://localhost:5000/api/v1'
      }
    ],
    components: {
      schemas: {
        ...user,
      },
      securitySchemes: {
        bearerAuthToken: {
          type: 'http',
          schema: 'Bearer',
        },
      },
    },
  },
});
