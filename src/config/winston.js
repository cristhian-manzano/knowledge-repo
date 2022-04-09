const winston = require('winston');

const myCustomLevels = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
  },
  colors: {
    error: 'bold red',
    warn: 'yellow',
    info: 'magenta',
    http: 'green',
    debug: 'blue',
  },
};

winston.addColors(myCustomLevels.colors);

const customLevel = () => {
  const environment = process.env.NODE_ENV || 'development';
  return environment === 'production' ? 'info' : 'debug';
};

const customFormat = winston.format.combine(
  winston.format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss:ms' }),
  winston.format.printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
  })
);

const customTransports = [
  new winston.transports.Console({
    level: 'debug',
    format: winston.format.combine(winston.format.colorize({ all: true })),
  }),

  new winston.transports.File({
    filename: './logs/combined.log',
    level: 'debug',
  }),

  new winston.transports.File({
    filename: './logs/errors.log',
    level: 'error',
  }),
];

const logger = winston.createLogger({
  level: customLevel(),
  levels: myCustomLevels.levels,
  transports: customTransports,
  format: customFormat,
});

module.exports = logger;
