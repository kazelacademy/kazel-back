const { join } = require('path');
require('dotenv/config');

const hbs = require('express-handlebars');
const express = require('express');

const database = require('./database');
const routes = require('./routes');
const logger = require('./logger');

const server = express();

server.engine('handlebars', hbs.engine({
  defaultLayout: 'admin',
}));

server.locals.context = {
  site: 'Kazel',
};

server.set('view engine', 'handlebars');
server.set('views', join(__dirname, 'views'));
server.use(express.static(join(__dirname, '..', 'public')));

server.use(express.urlencoded({extended: true}));
server.use(express.json());
server.use(routes);

async function startApp() {
  await database.sync({force: true});
  logger.info('Database connected');

  const port = process.env.PORT;
  server.listen(port, () => logger.info(`Server listen on port ${port}`))
}

module.exports = {
  logger,
  database,
  startApp,
};
