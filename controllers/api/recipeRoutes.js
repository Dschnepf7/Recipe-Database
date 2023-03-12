const router = require('express').Router();
const { Recipe } = require('../../models');
const withAuth = require('../../utils/auth');
const express = require('express');
const path = require('path');
const fs = require('fs');







router.post('/', withAuth, async (req, res) => {
  try {
    const newRecipe = await Recipe.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newRecipe);
  } catch (err) {
    res.status(400).json(err);
  }
});
router.get('/profile',function (req, res) {
const recipeData = JSON.parse(fs.readFileSync('seeds/recipeData.json', 'utf8'));
res.render('profile', {recipes: recipeData});
});

// would require id in the params?

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const recipeData = await Recipe.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!recipeData) {
      res.status(404).json({ message: 'No recipe found!' });
      return;
    }

    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', withAuth, (req, res) => {
  // Get all books from the book table
  console.log('test');
  Recipe.findAll().then((recipeData) => {
    res.json(recipeData);
  });
});

router.get('/:Title', async (req, res) => {
  try {
    console.log(req.params.Title);
    const dbRecipeData = await Recipe.findOne({where: {Title: req.params.Title},
      include: [
        {
          model: Recipe,
          attributes: [
            'id',
            'Title',
            'Ingredients',
            'Instructions',
          ],
        },
      ],
    });
// return dbRecipeData;
console.log(dbRecipeData);


    const recipe = dbRecipeData.get({ plain: true });
    res.render('profile', { recipe, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
