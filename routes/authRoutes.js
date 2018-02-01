var passport = require('passport');

var authRoutes = function(app) {
  app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));

  app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/');
    }
  )

  app.get('/auth/logout', function(req, res){
    req.logout();
    res.redirect('/');
  })

  app.get('/auth/current_user', function(req, res) {
    res.send(req.user);
  })
}

module.exports = authRoutes;
