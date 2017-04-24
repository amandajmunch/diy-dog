const User = require('../../models/users');
const router = require('express').Router();
const passport = require('passport');
const AuthService = require('../../services/authenticate');

router.post(
  '/',
  passport.authenticate(
    'local-signup',
    {
      failureRedirect: '/users/signup',
      successRedirect: '/users/login'
    }
  )
);

passport.use(new FacebookStrategy({
    clientID: 879887558825863,
    clientSecret: 76ed7fcd16d652d8e60d1fc5e99730a9,
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

// register new user

router.get('/signup', (req, res) => {
  res.render('users/signup');
});

// user logout

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// user login

router.get('/login', (req, res) => {
  res.render('users/login');
});

router.post('/login', passport.authenticate(
  'local-login',
  {
    failureRedirect: '/users/login',
    successRedirect: '/beers/'
  }
));


// user profile

router.get(
  '/beers',
  AuthService.restrict,
  (req, res) => {
    User
      .findByName(req.user.name)
      .then((user) => {
  res.render(
    'beers/',
    { user: user }
  );
      })
      .catch(err => console.log('ERROR:', err));
  }
);


User.show = (req, res) => {
    User.findBeersById(req.params.id)
    .then(user => {
        res.render("beers/", { users });
    })
    .catch((err) => {
      res.status(400)
      .send(err);
    });
}


module.exports = router;

