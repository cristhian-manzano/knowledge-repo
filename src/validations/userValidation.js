const { body } = require('express-validator');

const registerValidation = [
  body('username')
    .exists()
    .withMessage('field is required.')
    .bail()
    .isString()
    .withMessage('Must be a string.')
    .bail()
    .isLength({ min: 2, max: 50 })
    .withMessage('must have a min of 2 and max of 50 characters.'),
  body('email')
    .exists()
    .withMessage('field is required.')
    .bail()
    .isLength({ max: 50 })
    .withMessage('must have a max of 50 characters.')
    .bail()
    .isEmail()
    .withMessage('must be a valid email.')
    .normalizeEmail(),
  body('password')
    .exists()
    .withMessage('field is required.')
    .bail()
    .isLength({ min: 5, max: 30 })
    .withMessage('must have a min of 5 and max of 30 characters.'),
];

module.exports = {
  registerValidation,
};
