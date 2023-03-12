const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model { }

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Title: {
      type: DataTypes.STRING,
      

    },
    Ingredients: {
      type: DataTypes.TEXT,



    },
    Instructions: {
      type: DataTypes.TEXT,
    },

    Image_Name: {
      type: DataTypes.STRING
    },

    Cleaned_Ingredients: {
      type: DataTypes.TEXT
    }
  },

  {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    modelName: 'recipe'
  }
);

module.exports = Recipe;
