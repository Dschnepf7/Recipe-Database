const router = require('express').Router();

router.get('/savedRecipes', async (req, res) => {
  try {
    // Find the current user
    const user = await User.findOne({ where: { id: req.session.user_id } });

    // Get all the user's saved recipes
    const savedRecipes = await user.getRecipes();

    // Render the savedRecipes view with the user's saved recipes
    res.render('savedRecipes', { savedRecipes });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;