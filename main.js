const { logger, startApp } = require('./src/server');

startApp().catch((error) => {
  logger.error(error);
  process.exit(1);
});
