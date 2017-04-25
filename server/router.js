const router = require('express').Router();
const passport = require('passport');

router.use('/api/users', require('./controllers/users'));
router.use('/api/beers/', require('./controllers/beers'));
router.use('/api/images/', require('./controllers/images'));


// router.get('/login/facebook',
//   passport.authenticate('facebook', { scope : 'email' }
// ));

// handle the callback after facebook has authenticated the user
router.get('/login/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect : '/recipes',
    failureRedirect : '/'
  })
);

module.exports = router;
