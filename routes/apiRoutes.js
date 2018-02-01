var Company = require('mongoose').model('Company')
var Job = require('mongoose').model('Job')
var requireLogin = require('../middlewares/requireLogin')

var apiRoutes = function(app) {
  app.post('/api/company/new', requireLogin, function (req, res) {
    // ASKTEO: server-side validation or db enough for now?
    console.log("im over here")
    var { body } = req
    var newCompany = new Company({
      name: body.name,
      description: body.description,
      website: body.website,
      owner: req.user.id
    })

    newCompany.save((err, company) => {
      console.log("error", err);
      // ASKTEO: not great error responses
      // TODO: Add in proper error message
      if (err) {
        return res.status(400).send("oh no");
      }
      console.log("company", company);
      res.send(company)
      // res.redirect('/')
    })
  })

  // await aysnc snytax - maybe try it out here
  app.post('/api/job/new', requireLogin, function(req, res) {
    Company.find({ owner: req.user.id }, function(err, company) {
      if (err)
        return res.status(400).send("You must create a company before uploading a job")

      var { body } = req
      console.log("company", company)
      var newJob = new Job({
        title: body.title,
        description: body.description,
        link: body.link,
        jobType: { name: body.jobType },
        company: company[0].id
      })

      newJob.save(function(err, job) {
        if (err)
          return res.status(400).send(err)

        res.send(job)
      })
    })
  })

  app.get('/api/current_user', function(req, res) {
    res.send(req.user);
  })
}

module.exports = apiRoutes
