const router = require('express').Router();

const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.use('/recipe', recipeRoutes);
router.use('/ingredient', ingredientRoutes);

module.exports = router;