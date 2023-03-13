const router = require('express').Router();
const { Ingredient, Recipe } = require('../../models');

const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newIngredient = await Ingredient.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newIngredient);
  } catch (err) {
    res.status(400).json(err);
  }
});

// would require id in the params?

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const ingredientData = await Ingredient.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!ingredientData) {
      res.status(404).json({ message: 'No ingredient found!' });
      return;
    }

    res.status(200).json(ingredientData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/recipe-search', async(req, res) => {
const allRecipe = await Recipe.findAll();
const recipes = allRecipe.map(r=>r.get({plain:true}));
console.log(recipes);
const matchedRecipes = recipes.map(r=>{
  return r.Cleaned_Ingredients.split(", ").includes(req.body.searchTerm) ? r: "no recipe"
})
console.log(matchedRecipes);
});

//fetch /recipe-search 
// display data on page

module.exports = router;