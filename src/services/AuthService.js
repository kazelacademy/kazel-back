const { StatusCodes } = require('http-status-codes');
const { hash } = require('bcrypt');

const { sendAccountVerificationEmail } = require('../emails/mailer');
const User = require('../models/sequelize/User');
const logger = require('../logger');

const {
  signUpValidations,
} = require('../validations/auth');

const { generateToken } = require('../utils/tokens');
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

    const token = generateToken()
    const password = await hash(data.password, 10);
    const user = await User.create({ ...data, password, token });

    sendAccountVerificationEmail(user);
    return goodResult(user, StatusCodes.CREATED);
  } catch (error) {
    logger.error('[AuthService][signUp]', { error });
    return badResult(error.message);
  }
};

exports.verifyAccount = async (token) => {
  try {
    const user = await User.findOne({ where: { token }});

    if (!user) {
      return badResult(`token ${token} was not found`, StatusCodes.NOT_FOUND);
    }

    user.isVerified = true;
    user.token = null;

    await user.save();
    return goodResult('user verified');
  } catch (error) {
    logger.error('[AuthService][verifyAccount]', error);
    return badResult(error.message);
  }
};
