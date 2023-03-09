const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ingredient extends Model {}

Ingredient.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING, 
      allowNull: false,
    }
  }, // <- add closing brace here
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'ingredient',
  }
);

module.exports = Ingredient;
