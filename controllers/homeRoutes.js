const router = require('express').Router();
const {User} = require('../models/index');
const withAuth = require('../utils/auth');
const {Recipe} = require('../models/index');
const recipeData = require('../seeds/recipeData.json')

// router.get('/', (req, res) => {
//     res.render('login');
// });
router.get('/', (req, res) => {
  res.render('landingPage', { title: 'main page',logged_in:req.session.logged_in }); // Render the main.handlebars file with a title variable
});
router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/profile', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        // attributes: { exclude: ['password'] },
        // include: [{ model: Project }],
      });
  console.log(userData);
      const user = userData.get({ plain: true });
  
      res.render('profile', {
        // ...user,
        // logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
});
  
router.get('/profile',withAuth,async (req,res)=>{
try{
  const userData = await User.findByPk(req.session.user_id);
  const oneUser = userData.get({plain:true});
  // console.log(oneUser);

    res.render('profile',{
      user:oneUser,
      logged_in: req.session.logged_in
    });

} catch(err){
  res.status(500).json(err);
}
});


// GET one recipe
router.get('/seeds/recipeData.json/ecipe/:Title', async (req, res) => {
  try {
    const dbRecipeData = await Recipe.findOne(req.params.id, {
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

    const recipe = dbRecipeData.get({ plain: true });
    res.render('recipe', { recipe, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET all recipes for profile page
router.get('/', async (req, res) => {
  try {
    const dbRecipeData = await Recipe.findAll({
      include: [
        {
          model: Recipe,
          attributes: ['id', 'Title', 'Ingredients', 'Instructions'],
        },
      ],
    });

    const recipes = dbRecipeData.map((recipe) =>
      recipe.get({ plain: true })
    );
    res.render('profile', {
      recipes,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



router.get('/profile',async (req,res)=>{
try{
  const userData = await User.findByPk(req.session.user_id);
  const oneUser = userData.get({plain:true});
  // console.log(oneUser);
    res.render('profile');
} catch(err){
  res.status(500).json(err);
}
});

router.get('/recipe/:id',async (req,res)=>{
  try{
    const recipeData = await Recipe.findByPk(req.params.id);
    const recipe = recipeData.get({plain:true});
    console.log(recipe);
  
      res.render('recipeInfo',recipe);
  
  } catch(err){
    res.status(500).json(err);
  }
  });

module.exports = router;