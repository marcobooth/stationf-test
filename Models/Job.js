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
  }
  link: {
    type: String,
    required: true
  },
  jobType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'JobType',
    required: true
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true
  }
});
