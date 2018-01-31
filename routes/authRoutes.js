var passport = require('passport');

var authRoutes = function(app) {
  app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));

  app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
      // Successful authentication, redirect home.
      console.log("everything is fine");
      res.redirect('/');
    }
  )

  app.get('/api/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });
};

module.exports = authRoutes;
