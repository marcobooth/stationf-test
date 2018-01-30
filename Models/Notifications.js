var notificationRequestSchema = new Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  // have either or both. Must have one
  companyID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: function() { return this.jobType == null } //CHECK!!!!!!
  },
  jobType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job'
    required: function() { return this.companyID == null } //CHECK!!!!!!
  },
});

var notificationSchema = new Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  jobID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true
  },
  emailSent: {
    type: Boolean,
    default: false
  },
  seen: {
    type: Boolean,
    default: false
  }
});
