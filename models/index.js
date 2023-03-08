const Recipe = require('./Recipe');
const Ingredient = require('./Ingredient');


Ingredient.belongsToMany(Recipe, {
    foreignKey: 'ingredient_id',
});

Recipe.hasMany(Ingredient, {
    foreignKey: 'recipe_id',
});    


module.exports = { Ingredient, Recipe };