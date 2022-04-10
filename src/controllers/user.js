const { validationResult } = require('express-validator');

const { User } = require('../models/mysql/index');

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

    const [user, created] = await User.findOrCreate({
      where: { username: req.body.username },
      defaults: req.body,
    });

    if (!created)
      return errorResponse({
        res,
        statusCode: statusCodes.BAD_REQUEST,
        message: `username '${req.body.username}' already exists!`,
      });

    return successResponse({
      res,
      statusCode: statusCodes.CREATED,
      message: 'Created successfully!',
      data: { id: user.id },
    });
  } catch (error) {
    console.log('error: ', JSON.stringify(error));
    next(error);
  }
};

module.exports = {
  register,
};
