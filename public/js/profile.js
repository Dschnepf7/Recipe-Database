
// const searchFormHandler= async (event) => {
//   event.preventDefault();

//   // Collect values from search form
//   const Title = document.querySelector('#search-input').value.trim();
 
// console.log(Title);
//   if (Title) {
//     // Send a POST request to the API endpoint
//     const response = await fetch('/api/users/profile', {
//       method: 'POST',
//       body: JSON.stringify({ Title }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       // // If successful, redirect the browser to the profile page
//       // document.location.replace('/profile');
//       console.log(response.statusText);
//     } else {
//       alert(response.statusText);
//     }
//   }
// };

// document
//   .querySelector('.search-form')
//   .addEventListener('submit', searchFormHandler);

// router.delete('/recipe/:id', async (req, res) => {
//   try {
//     const deletedRecipe = await Recipe.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.status(200).json(deletedRecipe);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(router);

// const newFormHandler = async (event) => {
//   event.preventDefault();
//   const Title = document.querySelector('#recipe-name').value.trim();
//   const Ingredients = document.querySelector('#recipe-ingredients').value.trim();
//   const Instructions = document.querySelector('#recipe-instructions').value.trim();
//   const Image_Name = document.querySelector('#recipe-image').value.trim();
//   const Cleaned_Ingredients = document.querySelector('#recipe-cleaned-ingredients').value.trim();

//   if (Title) {
//     const response = await fetch('/api/profile', {
//       method: 'POST',
//       body: JSON.stringify({ Title, Ingredients, Instructions, Image_Name, Cleaned_Ingredients }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to create recipe');
//     }
//   }
// };

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/recipe/${Title}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       window.location.reload();
//     } else {
//       alert('Failed to delete recipe');
//     }
//   }
// };



// const searchForm = document.querySelector('#search-form');

// searchForm.addEventListener('submit', async (event) => {
//   event.preventDefault();

//   const searchValue = document.querySelector('#search-input').value.trim();
//   const response = await fetch(`/recipe?Title=${searchValue}`);
//   console.log(response);

//   if (response.ok) {
//     const recipe = await response.json();
//     // handle data, such as updating HTML with the recipe details
//     console.log(recipe);
//   } else {
//     alert('Failed to get recipe');
//   }
// });




// document.querySelector('.recipe-list').addEventListener('click', delButtonHandler);


// const newFormHandler = async (event) => {
//   event.preventDefault();

//   const title = document.querySelector('#search-input').value.trim();

//   if (title) {
//     const response = await fetch(`/api/recipe`, {
//       method: 'POST',
//       body: JSON.stringify({ title }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       console.log()
//       // document.location.replace('/profile');
//     } else {
//       alert('Failed to create project');
//     }
//   }
// };

// // // const delButtonHandler = async (event) => {
// // //   if (event.target.hasAttribute('data-id')) {
// // //     const id = event.target.getAttribute('data-id');

// // //     const response = await fetch(`/api/projects/${id}`, {
// // //       method: 'DELETE',
// // //     });

// // //     if (response.ok) {
// // //       document.location.replace('/profile');
// // //     } else {
// // //       alert('Failed to delete project');
// // //     }
// // //   }
// // };

// document
//   .querySelector('.new-project-form')
//   .addEventListener('submit', newFormHandler);

// // document
// //   .querySelector('.project-list')
// //   .addEventListener('click', delButtonHandler);


// router.delete('/recipe/:id', async (req, res) => {
//   try {
//     const deletedRecipe = await Recipe.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.status(200).json(deletedRecipe);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(router);

const newFormHandler = async (event) => {
  event.preventDefault();
  const Title = document.querySelector('#recipe-name').value.trim();
  const Ingredients = document.querySelector('#recipe-ingredients').value.trim();
  const Instructions = document.querySelector('#recipe-instructions').value.trim();
  const Image_Name = document.querySelector('#recipe-image').value.trim();
  const Cleaned_Ingredients = document.querySelector('#recipe-cleaned-ingredients').value.trim();

  if (Title) {
    const response = await fetch('./seeds/recipeData.json', {
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
  const response = await fetch(`/api/recipe?title=${searchValue}`);
  console.log(response);

  if (response.ok) {
    const recipe = await response.json();
    // handle data, such as updating HTML with the recipe details
    console.log(recipe);
  } else {
    alert('Failed to get recipe');
  }
});




// document.querySelector('.recipe-list').addEventListener('click', delButtonHandler);