const express = require('express');
const pgp = require('pg-promise')();
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const configAuth = require('./config/fb');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());
app.use(require('./router'));

app.use(passport.initialize());

app.use(passport.session());

app.use(cookieParser());

app.use(flash());

const User = require('./models/users');

passport.deserializeUser((userObj, done) => {
  console.log(userObj);


});

// passport.use(new FacebookStrategy({
//     clientID: configAuth.facebook.clientID,
//     clientSecret: configAuth.facebook.clientSecret,
//     callbackURL: configAuth.facebook.callbackURL
//   },
//   function(accessToken, refreshToken, profile, done) {
//      User
//     .findByEmail(userObj.email)
//     .then((user) => done(null, user))
//     .catch((err) => {
//       console.log('ERROR:', err);
//       return done(null, false);
//     });
//   }
// ));


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});
