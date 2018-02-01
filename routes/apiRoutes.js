var Company = require('mongoose').model('Company')
var Job = require('mongoose').model('Job')
var requireLogin = require('../middlewares/requireLogin')

var apiRoutes = function(app) {
  //TODO: only send down required information

  app.get('/api/jobs', function(req, res) {
    Job.find({}, function(err, jobs) {
      if (err)
        res.status(400).send("no jobs to be found")

      res.send(jobs)
    })
  })

  //require Company??
  app.get('/api/posted_jobs', requireLogin, function(req, res) {
    Company.findOne({ owner: req.user.id }, function(err, company) {
      if (err)
        res.status(400).send("no jobs here")
      if (company === null)
        return res.send(null)
      console.log("company: ", company)
      Job.find({ company: company._id }, function(err, jobs) {
        if (err)
          res.status(400).send("no jobs here")

        console.log("jobs: ", jobs)
        res.send(jobs)
      })
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
        // jobType: { name: body.jobType },
        jobType: { name: 'Technical' },
        company: company[0].id
      })

      newJob.save(function(err, job) {
        if (err)
          return res.status(400).send("that did not work")

        res.send(job)
      })
    })
  })

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
    // ASKTEO: server-side validation or db enough for now?
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
      res.send(company)
    })
  })

  app.get('/api/current_user', function(req, res) {
    res.send(req.user);
  })
}

module.exports = apiRoutes
