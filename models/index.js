const Recipe = require('./Recipe');
const Ingredient = require('./Ingredient');
const User = require('./User');


Ingredient.belongsToMany(Recipe, {
    through: 'recipe_ingredients',
    foreignKey: 'ingredient_id',
});

Ingredient.belongsToMany(User, {
    through: 'user_ingredients',
    foreignKey: 'ingredient_id',
    onDelete: 'CASCADE'
})

Recipe.hasMany(Ingredient, {
    foreignKey: 'recipe_id',
    onDelete: 'CASCADE'
});    

User.hasMany(Recipe, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'

});

User.hasMany(Ingredient, {
    foreignKey: 'user_id',
});


module.exports = { Ingredient, Recipe, User };