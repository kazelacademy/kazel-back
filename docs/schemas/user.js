exports.signUpInput = {
  type: 'object',
  required: [
    'firstname',
    'lastname',
    'email',
    'password',
  ],
  properties: {
    firstname: {
      type: 'string'
    },
    lastname: {
      type: 'string'
    },
    email: {
      type: 'string',
      format: 'email'
    },
    password: {
      type: 'string'
    },
  },
};

exports.signUp201Output = {
  type: 'object',
  properties: {
    message: {
      type: 'string',
      example: 'Created'
    },
    statusCode: {
      type: 'integer',
      example: 201
    },
    data: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          format: 'uuid',
        },
        slug: {
          type: 'string',
          example: 'nombre_apellido'
        },
        roles: {
          type: 'array',
          items: {
            type: 'string',
            example: 'estudiante'
          },
        },
        email: {
          type: 'string',
          format: 'email'
        },
        firstname: {
          type: 'string',
          example: 'nombre'
        },
        lastname: {
          type: 'string',
          example: 'apellido'
        },
        createdAt: {
          type: 'string',
          format: 'date-time'
        },
      }
    }
  },
};

exports.signUp400Output = {
  type: 'object',
  properties: {
    message: {
      type: 'string',
      example: 'Bad Request'
    },
    statusCode: {
      type: 'integer',
      example: 400
    },
    errors: {
      type: 'array',
      items: {
        type: 'string',
        example: 'example@gmail.com already exists'
      }
    }
  },
};

