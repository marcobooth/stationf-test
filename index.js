var express = require('express')
var keys = require('./config/keys');
var app = express();
var cookieSession = require('cookie-session');
var passport = require('passport');

var mongoose = require('mongoose');
mongoose.connect(keys.mongoURL);
var userSchema = require('./Models/User');

// If enabled, be sure to use session() before passport.session()
// to ensure that the login session is restored in the correct order.
// session()
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  }),
);
require('./services/passport')
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app)

app.get('/', function (req, res) {
  console.log("req user: ", req.user);
  res.send('hello world')
})

app.get('/api/current_user', function(req, res) {
  res.send(req.user);
})

app.listen(3000)
