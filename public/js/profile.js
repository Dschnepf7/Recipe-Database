const express = require('express');
const app = express();
const recipeData = require('../seeds/recipeData');
const newFormHandler = async (event) => {
  event.preventDefault();
  const Title = document.querySelector('#recipe-name').value.trim();
  const Ingredients = document.querySelector('#recipe-ingredients').value.trim();
  const Instructions = document.querySelector('#recipe-instructions').value.trim();
  const Image_Name = document.querySelector('#recipe-image').value.trim();
  const Cleaned_Ingredients = document.querySelector('#recipe-cleaned-ingredients').value.trim();

  router.get('/recipes/:title', async (req, res) => {
    try {
      const [rows, fields] = await pool.query(
        'SELECT * FROM recipes WHERE title = ?',
        [req.params.Title]
      );
      if (rows.length === 0) {
        return res.status(404).send('Recipe not found');
      }
      const recipe = rows[0];
      res.render('recipe', { Recipe });
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  });

  if (Title && Ingredients && Instructions && Image_Name && Cleaned_Ingredients) {
    const response = await fetch(`/api/Recipe`, {
      method: 'POST',
      body: JSON.stringify({ Title, Ingredients, Instructions, Image_Name, Cleaned_Ingredients }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create recipe');
    }
  }
};


const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/recipe/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      // reload the page to reflect the deleted recipe
      window.location.reload();
    } else {
      alert('Failed to delete recipe');
    }
  }
};

document.querySelector('.recipe-list').addEventListener('click', delButtonHandler);

  