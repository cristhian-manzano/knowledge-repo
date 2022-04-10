const { encrypt } = require('../../helpers/encryption');

const encryptPassword = async (user) => {
  if (!user) throw new Error('Error getting user data.');
  if (user.changed('password')) {
    const hashPassword = await encrypt(user.password);
    user.password = hashPassword;
  }
};

module.exports = (sequelize, dataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: dataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    username: {
      type: dataTypes.STRING(30),
      allowNull: false,
      unique: true,
    },

    email: {
      type: dataTypes.STRING(50),
      allowNull: false,
    },

    password: {
      type: dataTypes.STRING(255),
      allowNull: false,
    },
  });

  sequelize.addHook('beforeCreate', encryptPassword);
  sequelize.addHook('beforeUpdate', encryptPassword);

  return User;
};
