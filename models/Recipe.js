const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {}

Recipe.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    instructions: {
        type: DataTypes.STRING, 
        allowNull: false,
    }

  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipe',
  }
});

module.exports = Recipe;