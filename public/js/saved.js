
  if (Title && Ingredients && Instructions && Image_Name && Cleaned_Ingredients) {
    const response = await fetch('user_Recipes', {
      method: 'POST',
      body: JSON.stringify({ Title, Ingredients, Instructions, Image_Name, Cleaned_Ingredients }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/Saved');
    } else {
      alert('Failed to save recipe');
    }
  };
