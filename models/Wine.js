
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Wine extends Model {}

Wine.init(
  {
    wine_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    wine_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alcoholic: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'wine',
  }
);

module.exports = Wine;