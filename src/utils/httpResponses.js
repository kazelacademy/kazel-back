const { getReasonPhrase } = require('http-status-codes');

exports.goodJSON = (emitter, data, statusCode = 200) => {
  emitter.status(statusCode).json({
    message: getReasonPhrase(statusCode),
    statusCode,
    data,
  });
};

exports.badJSON = (emitter, errors, statusCode = 500) => {
  emitter.status(statusCode).json({
    errors: Array.isArray(errors) ? errors : [errors],
    message: getReasonPhrase(statusCode),
    statusCode,
  });
};
