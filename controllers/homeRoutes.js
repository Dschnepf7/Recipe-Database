const router = require('express').Router();
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

router.get('/profile', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Project }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('profile', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  


module.exports = router;