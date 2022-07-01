/* eslint-disable no-useless-escape */
module.exports = (errors) => errors.details.map((error) => error.message.replace(/\"/g, ''));
