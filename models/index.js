const Recipe = require('./Recipe');
const User = require('./User');
const SavedRecipe = require('./SavedRecipe');


SavedRecipe.belongsTo(User, {
    foreignKey: 'SavedRecipe_id',
    onDelete: 'CASCADE'
})

Recipe.belongsToMany(User, {
    through: SavedRecipe,
    
});

User.belongsToMany(Recipe, {
    through: SavedRecipe,
    

});

User.hasMany(SavedRecipe, {
    foreignKey: 'user_id',
});


module.exports = { SavedRecipe, Recipe, User };