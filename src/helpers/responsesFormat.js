const successResponse = ({ res, statusCode, message, data }) => {
  return res.status(statusCode).json({
    message,
    status: res.statusCode,
    data,
  });
};

const errorResponse = ({ res, statusCode, message }) => {
  return res.status(statusCode).json({
    message,
    status: res.statusCode,
  });
};

module.exports = { errorResponse, successResponse };
