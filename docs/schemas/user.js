exports.signUpInput = {
  type: 'object',
  required: [
    'email',
    'password',
    'firstname',
    'lastname',
  ],
  properties: {
    firstname: {
      type: 'string',
      example: 'Nombre'
    },
    lastname: {
      type: 'string',
      example: 'Apellido'
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
          example: 'nombre-apellido'
        },
        roles: {
          type: 'array',
          items: {
            type: 'string',
            example: 'student'
          },
        },
        email: {
          type: 'string',
          format: 'email'
        },
        firstname: {
          type: 'string',
          example: 'Nombre'
        },
        lastname: {
          type: 'string',
          example: 'Apellido'
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

