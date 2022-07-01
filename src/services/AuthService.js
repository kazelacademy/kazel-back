const { StatusCodes } = require('http-status-codes');
const { hash } = require('bcrypt');

const User = require('../models/sequelize/User');
const logger = require('../logger');

const {
  signUpValidations,
} = require('../validations/auth');

const cleanResult = require('../validations/cleanResult');
const { badResult, goodResult } = require('../utils/servicesResults');

exports.signUp = async (data) => {
  try {
    const { error } = signUpValidations.validate(data);

    if (error) {
      return badResult(cleanResult(error), StatusCodes.BAD_REQUEST);
    }

    if (await User.findOne({ where: { email: data.email } })) {
      return badResult(`${data.email} already exists`, StatusCodes.BAD_REQUEST);
    }

    const password = await hash(data.password, 10);
    const user = await User.create({ ...data, password });

    // Token
    // Email
    return goodResult(user, StatusCodes.CREATED);
  } catch (error) {
    logger.error('[AuthService][signUp]', error);
    return badResult(error.message);
  }
};
