var express = require('express')
var keys = require('./config/keys');
var passport = require('passport');
var app = express();
var cookieSession = require('cookie-session');
// If enabled, be sure to use session() before passport.session()
// to ensure that the login session is restored in the correct order.
// session()
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  }),
);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  console.log("id", user.id);
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  console.log("de-ID: ", id);
  done(null, { "something": "user" })
  // User.findById(id, function(err, user) {
  //   done(err, user);
  // });
});


var GoogleStrategy = require('passport-google-oauth20').Strategy;
passport.use(new GoogleStrategy({
    clientID: keys.clientID,
    clientSecret: keys.clientSecret,
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log("hello there");
    return cb(null, { "id": 54 });
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
  }
));

app.get('/', function (req, res) {
  console.log("req user: ", req.user);
  res.send('hello world')
})

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    console.log("everything is fine");
    res.redirect('/');
  }
);

app.listen(3000)
