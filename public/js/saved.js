
  // if (Title && Ingredients && Instructions && Image_Name && Cleaned_Ingredients) {
  //   const response = await fetch('user_Recipes', {
  //     method: 'POST',
  //     body: JSON.stringify({ Title, Ingredients, Instructions, Image_Name, Cleaned_Ingredients }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });

  //   if (response.ok) {
  //     document.location.replace('/Saved');
  //   } else {
  //     alert('Failed to save recipe');
  //   }
  // };

  const saveClickHandler = async (event) => {
    const title = document.querySelector('#recipe-title').textContent;
    const recipeId = document.querySelector('#recipe-title').getAttribute('data-id');
    console.log(title);
    try {
      const response = await fetch(`/api/recipe/save-recipe/${recipeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
  
      const savedRecipe = await response.json();
      return savedRecipe;
    } catch (err) {
      console.error(err);
    }
  };
  
document.querySelector('.save-btn').addEventListener('click', saveClickHandler);