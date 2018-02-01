var Company = require('mongoose').model('Company')
var requireLogin = require('../middlewares/requireLogin')

var companyRoutes = function(app) {

  app.get('/api/company', requireLogin, function(req, res) {
    Company.findOne({ owner: req.user.id }, function(err, company) {
      if (err) {
        console.log("error: ", err)
        return res.status(400).send("no companies here")
      }

      res.send(company)
    })
  })

  app.post('/api/company/new', requireLogin, function (req, res) {
    var { body } = req
    var newCompany = new Company({
      name: body.name,
      description: body.description,
      website: body.website,
      owner: req.user.id
    })

    newCompany.save((err, company) => {
      console.log("error", err);
      // TODO: Add in proper error message
      if (err) {
        return res.status(400).send("oh no");
      }
      res.send(company)
    })
  })
}

module.exports = companyRoutes
