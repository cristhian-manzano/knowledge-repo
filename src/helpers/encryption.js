const bcrypt = require('bcrypt');

const logger = require('../config/winston');

const encrypt = async (value) => {
  if (!value || typeof value !== 'string') {
    logger.error(
      `file: encryption.js ~ line 7 ~ encrypt ~ value: Value to encrypt has to be a valid string`
    );
    throw new Error('Value to encrypt has to be a string');
  }

  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(value, salt);
};

const validate = async (value, hash) => {
  if (
    !value ||
    !hash ||
    typeof value !== 'string' ||
    typeof hash !== 'string'
  ) {
    throw new Error('Value and hash have to be a valid string');
  }

  return bcrypt.compare(value, hash);
};

module.exports = {
  encrypt,
  validate,
};
