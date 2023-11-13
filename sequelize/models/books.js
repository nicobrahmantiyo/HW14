const { DataTypes } = require('sequelize');
const sequelize = require('../index');

const books = sequelize.define('books', {
  tytle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  publisher: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pages: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updateAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = books;
