

const newFormHandler = async (event) => {
  event.preventDefault();
  const Title = document.querySelector('#recipe-name').value.trim();
  const Ingredients = document.querySelector('#recipe-ingredients').value.trim();
  const Instructions = document.querySelector('#recipe-instructions').value.trim();
  const Image_Name = document.querySelector('#recipe-image').value.trim();
  const Cleaned_Ingredients = document.querySelector('#recipe-cleaned-ingredients').value.trim();

  
  const getRecipeByTitle = async (title) => {
    try {
      const response = await fetch(`/recipes/${title}`);
      if (!response.ok) {
        throw new Error(response.status);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  

  if (Title && Ingredients && Instructions && Image_Name && Cleaned_Ingredients) {
    const response = await fetch('/api/recipe', {
      method: 'POST',
      body: JSON.stringify({ Title, Ingredients, Instructions, Image_Name, Cleaned_Ingredients }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/search');
    } else {
      alert('Failed to create recipe');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/recipe/${Title}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      window.location.reload();
    } else {
      alert('Failed to delete recipe');
    }
  }
};



const searchForm = document.querySelector('#search-form');

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const searchValue = document.querySelector('#search-input').value.trim();
  console.log(searchValue);
  const response = await fetch(`/api/recipe/${searchValue}`);

  if (response.ok) {
    const recipeData = await response.json();
    console.log(recipeData);
    document.getElementById("recipe-title").textContent=recipeData.recipe.Title;
    document.getElementById("food-image").src= "/images/Food-Images/"+recipeData.recipe.Image_Name+".jpg"
    document.getElementById("recipe-link").href="/recipe/"+recipeData.recipe.id
    // handle data, such as updating HTML with the recipe details
  } else {
    alert('Failed to get recipe');
  }
});





// document.querySelector('.recipe-list').addEventListener('click', delButtonHandler);




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
const searchInput = document.querySelector('#search-input');

searchInput.addEventListener('input', async () => {
  const searchValue = searchInput.value.trim();

  if (searchValue) {
    const response = await fetch(`/api/autocomplete/${searchValue}`);

    if (response.ok) {
      const suggestions = await response.json();
      // Display the suggestions
    } else {
      console.error(`Failed to get autocomplete suggestions for "${searchValue}"`);
    }
  }
});


module.exports = router;

