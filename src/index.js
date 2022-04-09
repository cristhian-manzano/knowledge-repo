const app = require('../app');
const logger = require('./config/winston');
const routes = require('./routes/index');
const { errorResponse } = require('./helpers/responsesFormat');
const statusCodes = require('./helpers/codeResponses');

app.use('/', routes);

app.use('*', (_req, res) => {
  return errorResponse({
    res,
    statusCode: statusCodes.BAD_REQUEST,
    message: 'Route does not exists!',
  });
});

// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  return errorResponse({
    res,
    statusCode: statusCodes.INTERNAL_SERVER_ERROR,
    message: `Server error: ${err}`,
  });
});

const PORT = process.env.APP_PORT || 3001;

const server = app.listen(PORT, () => {
  logger.info(`Running app in port ${PORT}`);
});

process.on('uncaughtException', (err) => {
  logger.error(err);
  server.close(() => {
    process.exit(1);
  });
  setTimeout(() => {
    process.abort();
  }, 1000).unref();
});

process.on('unhandledRejection', (reason, promise) => {
  logger.error(
    `Unhandled promise rejection: Reason:${reason} Promise:${promise}`
  );
  server.close(() => {
    process.exit(1);
  });
  setTimeout(() => {
    process.abort();
  }, 1000).unref();
});
