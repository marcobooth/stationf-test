var requireLogin = function(req, res, next) {
  if (!req.user)
    return res.status(401).send("Doesn't look like you are logged in")

  next()
}

module.exports = requireLogin;
