const Recipe = require('./recipe');
const Ingredient = require('./ingredient');
const User = require('./user');


Ingredient.belongsToMany(Recipe, {
    foreignKey: 'ingredient_id',
});

Ingredient.belongsToMany(User, {
    foreignKey: 'ingredient_id',
})

Recipe.hasMany(Ingredient, {
    foreignKey: 'recipe_id',
});    

User.hasMany(Recipe, {
    foreignKey: 'user_id',

});

User.hasMany(Ingredient, {
    foreignKey: 'user_id',
});


module.exports = { Ingredient, Recipe };