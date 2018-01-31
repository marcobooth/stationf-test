var mongoose = require('mongoose')
var { Schema } = mongoose
var jobTypeSchema = require('./JobType')

var jobSchema = new Schema({
  title: {
    type: String,
    minlength: 3,
    maxlength: 20,
    required: true
  },
  description: {
    type: String,
    maxlength: 140,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  jobType: jobTypeSchema,
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true
  }
});

var Job = mongoose.model('Job', jobSchema)

module.exports = Job
