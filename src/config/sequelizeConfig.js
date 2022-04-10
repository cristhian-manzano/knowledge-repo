module.exports = {
  development: {
    username: 'root',
    password: 'root',
    database: 'test-db',
    port: 3306,
    host: '127.0.0.1',
    dialect: 'mysql',
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
