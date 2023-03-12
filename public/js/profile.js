
const newFormHandler = async (event) => {
  event.preventDefault();
  const Title = document.querySelector('#recipe-name').value.trim();
  const Ingredients = document.querySelector('#recipe-ingredients').value.trim();
  const Instructions = document.querySelector('#recipe-instructions').value.trim();
  const Image_Name = document.querySelector('#recipe-image').value.trim();
  const Cleaned_Ingredients = document.querySelector('#recipe-cleaned-ingredients').value.trim();

  // router.get('/recipes/:title', async (req, res) => {
  //   try {
  //     const [rows, fields] = await pool.query(
  //       'SELECT * FROM recipes WHERE title = ?',
  //       [req.params.title]
  //     );
  //     if (rows.length === 0) {
  //       return res.status(404).send('Recipe not found');
  //     }
  //     const recipe = rows[0];
  //     res.render('recipe', { Recipe });
  //   } catch (err) {
  //     console.error(err);
  //     res.status(500).send('Server error');
  //   }
  // });
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
      document.location.replace('/profile');
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
  const response =  await fetch(`/api/recipe/${searchValue}`)
   .then((response) => response.json())
   .then((data) => data.filter((recipe) => recipe.Title.includes(searchValue)));
  console.log("test1");
  console.log(response);

  if (response.ok) {
    const recipeData = await response.json();
    // handle data, such as updating HTML with the recipe details
    console.log(recipe);
  } else {
    alert('Failed to get recipe');
  }
});



// document.querySelector('.recipe-list').addEventListener('click', delButtonHandler);

