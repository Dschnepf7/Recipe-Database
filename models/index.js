const Recipe = require('./Recipe');
const User = require('./User');
const SavedRecipe = require('./SavedRecipe');


SavedRecipe.belongsTo(User, {
    foreignKey: 'SavedRecipe_id',
    onDelete: 'CASCADE'
})

Recipe.belongsToMany(User, {
    through: 'user_recipes',
    foreignKey: 'recipe_id',
    onDelete: 'CASCADE'
})

User.hasMany(Recipe, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'

});

User.hasMany(SavedRecipe, {
    foreignKey: 'user_id',
});


module.exports = { SavedRecipe, Recipe, User };