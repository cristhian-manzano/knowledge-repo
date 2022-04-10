const router = require('express').Router();

const { register } = require('../controllers/user');
const { registerValidation } = require('../validations/userValidation');

router.post('/register', registerValidation, register);

module.exports = router;
