const { validationResult } = require('express-validator');

const { User } = require('../models/index');

const {
  errorResponse,
  successResponse,
} = require('../helpers/responsesFormat');

const statusCodes = require('../helpers/codeResponses');

const register = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return errorResponse({
        res,
        statusCode: 422,
        message: errors.array().map((e) => `${e.param}: ${e.msg}`),
      });

    const user = await User.create(req.body);

    return successResponse({
      res,
      statusCode: statusCodes.CREATED,
      message: 'Created successfully',
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
};
