const router = require('express').Router();

const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipeRoutes');
const ingredientRoutes = require('./ingredientRoutes');
//fixed the paths for the recipe and ingredient routes (:
router.use('/users', userRoutes);
router.use('/recipe', recipeRoutes);
router.use('/ingredient', ingredientRoutes);

module.exports = router;