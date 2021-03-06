module.exports = {
  development: {
    username: 'root',
    password: 'root',
    database: 'test-db',
    port: 3306,
    host: '127.0.0.1',
    dialect: 'mysql',

    define: {
      freezeTableName: true,
      charset: 'utf8',
      timestamps: true,
    },

    pool: {
      max: 5,
      idle: 30000,
      acquire: 60000,
    },
    logging: false,
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: process.env.DATABASE_MYSQL_USERNAME,
    password: process.env.DATABASE_MYSQL_PASSWORD,
    database: process.env.DATABASE_MYSQL_DATABASE,
    host: process.env.DATABASE_MYSQL_HOST,
    port: process.env.DATABASE_MYSQL_PORT,
    dialect: 'mysql',
  },
};
