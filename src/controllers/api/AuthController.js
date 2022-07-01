const { request, response } = require('express');
const { StatusCodes } = require('http-status-codes');

const { goodJSON, badJSON } = require('../../utils/httpResponses');
const service = require('../../services/AuthService');

exports.signUp = async (req = request, res = response) => {
  const result = await service.signUp(req.body);

  if (result.error) {
    return badJSON(res, result.error, result.statusCode);
  }

  return goodJSON(res, result.data, StatusCodes.CREATED);
};
