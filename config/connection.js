const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    // THE PORT HAS TO BE 3306 FOR SEQUELIZE!!! IT CAN'T BE ANY OTHER PORT
    port: 3306,
  }
);

module.exports = sequelize;