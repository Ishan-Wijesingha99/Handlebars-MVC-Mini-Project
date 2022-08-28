const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pizza extends Model {}

Pizza.init(
  {
    pizza_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    pizza_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'pizza',
  }
);

module.exports = Pizza;