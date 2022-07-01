const Joi = require('joi');

exports.signUpValidations = Joi.object({
  email: Joi.string().email().required(),
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  password: Joi.string().required(),
}).options({ abortEarly: false });
