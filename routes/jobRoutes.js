var Company = require('mongoose').model('Company')
var Job = require('mongoose').model('Job')
var requireLogin = require('../middlewares/requireLogin')

var jobRoutes = function(app) {
  app.get('/api/jobs', function(req, res) {
    Job.find({}, function(err, jobs) {
      if (err)
        res.status(400).send("no jobs to be found")

      res.send(jobs)
    })
  })

  app.get('/api/posted_jobs', requireLogin, function(req, res) {
    //TODO: Validate they own a company
    Company.findOne({ owner: req.user.id }, function(err, company) {
      if (err)
        res.status(400).send("no jobs here")
      if (company === null)
        return res.send(null)

      Job.find({ company: company._id }, function(err, jobs) {
        if (err)
          res.status(400).send("no jobs here")

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
}

module.exports = jobRoutes
