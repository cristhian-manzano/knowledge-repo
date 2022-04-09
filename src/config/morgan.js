const morgan = require('morgan');
const logger = require('./winston');

const skipMiddleware = () => {
  const environment = process.env.NODE_ENV || 'development';
  return environment === 'production';
};

const morganMiddleware = morgan('tiny', {
  skip: skipMiddleware,
  stream: {
    write: (message) => logger.http(message),
  },
});

module.exports = morganMiddleware;
