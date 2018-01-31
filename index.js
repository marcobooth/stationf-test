var express = require('express')
var keys = require('./config/keys');
var app = express();
var cookieSession = require('cookie-session');
var passport = require('passport');
var bodyParser = require('body-parser')

var mongoose = require('mongoose');
mongoose.connect(keys.mongoURL);
var userSchema = require('./models/User');
require('./models/JobType');
require('./models/Company');
require('./models/Job')
// require('./models/JobType')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

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
require('./routes/apiRoutes')(app)

app.get('/', function (req, res) {
  console.log("req user: ", req.user);
  res.send('hello world')
})

app.listen(3000)
