const pino = require('pino');

const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'SYS:standard',
      // yyyy-mm-dd HH:MM:ss.l o (l = Milliseconds, o = GMT/UTC timezone)
    },
  },
});

module.exports = logger;
