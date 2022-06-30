const express = require('express');
const pino = require('pino-http');

const routes = require('./routes/router');
const logger = require('./logger');

const server = express();

server.use(pino({ logger }));
server.use(`/api/${process.env.API_VERSION}`, routes);

const port = process.env.PORT;
server.listen(port, () => logger.info(`Server listen on port ${port}`));
