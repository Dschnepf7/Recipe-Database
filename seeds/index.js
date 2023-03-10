const sequelize = require('../config/connection');
const { Recipe } = require('../models');

const recipeData = require('./recipeData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const recipes = await Recipe.bulkCreate(recipeData, {
    fields: ['id', 'Title', 'Ingredients', 'Instructions', 'Image_Name', 'Cleaned_Ingredients']
  });

  console.log(`${recipes.length} recipes created successfully.`);

  process.exit(0);
};

seedDatabase();
