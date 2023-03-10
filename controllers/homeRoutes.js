const router = require('express').Router();
const {User} = require('../models/index');
const withAuth = require('../utils/auth');

// router.get('/', (req, res) => {
//     res.render('login');
// });
router.get('/', (req, res) => {
  res.render('layouts/main', { title: 'main page' }); // Render the main.handlebars file with a title variable
});
router.get('/login', (req, res) => {
  res.render('login');
});

// router.get('/profile', withAuth, async (req, res) => {
//     try {
//       // Find the logged in user based on the session ID
//       const userData = await User.findByPk(req.session.user_id, {
//         // attributes: { exclude: ['password'] },
//         // include: [{ model: Project }],
//       });
//   console.log(userData);
//       const user = userData.get({ plain: true });
  
//       res.render('profile', {
//         // ...user,
//         // logged_in: req.session.logged_in
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
  
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


// router.get('/profile',async (req,res)=>{
// try{
//   const userData = await User.findByPk(req.session.user_id);
//   const oneUser = userData.get({plain:true});
//   // console.log(oneUser);
//     res.render('profile');
// } catch(err){
//   res.status(500).json(err);
// }
// });

module.exports = router;