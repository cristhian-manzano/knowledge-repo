module.exports = (sequelize, dataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: dataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    username: {
      type: dataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: dataTypes.STRING,
      allowNull: false,
    },

    password: {
      type: dataTypes.STRING,
      allowNull: false,
    },
  });

  // sequelize.addHook('beforeCreate', (model, options) => {
  // Do stuff
  // const hashedPassword = await hashPassword(user.password);
  // user.password = hashedPassword;
  // });

  // sequelize.addHook('beforeUpdate', (model, options) => {
  // Do stuff
  // const hashedPassword = await hashPassword(user.password);
  // user.password = hashedPassword;
  // });

  return User;
};
