const Recipe = require('./recipe');
const Ingredient = require('./ingredient');


Ingredient.belongsToMany(Recipe, {
    foreignKey: 'ingredient_id',
});

Recipe.hasMany(Ingredient, {
    foreignKey: 'recipe_id',
});    


module.exports = { Ingredient, Recipe };