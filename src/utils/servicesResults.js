const { getReasonPhrase } = require('http-status-codes');

exports.goodResult = (data, statusCode = 200) => ({
  message: getReasonPhrase(statusCode),
  statusCode,
  data,
});

exports.badResult = (error, statusCode = 500) => ({
  message: getReasonPhrase(statusCode),
  statusCode,
  error,
});
