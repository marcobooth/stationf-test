var passport = require('passport');
var keys = require('../config/keys');
var User = require('mongoose').model('User');

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  })
});

var GoogleStrategy = require('passport-google-oauth20').Strategy;
passport.use(new GoogleStrategy({
    clientID: keys.clientID,
    clientSecret: keys.clientSecret,
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    // TODO: enforce uniqueness
    User.findOne({ googleID: profile.id }, function(err, user) {
      if (user) {
        return cb(err, user)
      } else {
        new User({ googleID: profile.id }).save((err, user) => {
          return cb(err, user);
        })
      }
    })
  }
));
