const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  username: 'postgres',
  password: '130923',
  host: 'localhost',
  port: 5432,
  database: 'books',
});

module.exports = sequelize;
