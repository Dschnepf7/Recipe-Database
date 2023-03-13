const router = require('express').Router();
const { Recipe, SavedRecipe } = require('../../models');
const withAuth = require('../../utils/auth');
const express = require('express');
const path = require('path');
const fs = require('fs');

router.post('/:Title', withAuth, async (req, res) => {
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
    const dbRecipeData = await Recipe.findOne({
      where: { Title: req.params.Title },
      attributes: { exclude: ['Cleaned_Ingredients'] },
    });

    const recipe = dbRecipeData.get({ plain: true });
    res.json({ recipe });
    console.log(recipe)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/save-recipe/:id", async (req, res) => {
  try {
    const recipeId = req.params.id;
    const userId = req.session.user_id;

    // Check if the recipe is already saved by the user
    const savedRecipe = await SavedRecipe.findOne({
      where: { recipe_id: recipeId, user_id: userId },
    });

    if (savedRecipe) {
      // Recipe already saved, send a message
      res.status(400).json({ message: "Recipe already saved" });
    } else {
      // Recipe not saved, create a new saved recipe record
      const recipe = await Recipe.findByPk(recipeId);
      const newSavedRecipe = await SavedRecipe.create({
        Title: recipe.Title,
        Ingredients: recipe.Ingredients,
        Instructions: recipe.Instructions,
        Image_Name: recipe.Image_Name,
        user_id: userId,
      });
      res.status(201).json(newSavedRecipe);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


  
module.exports = router;
