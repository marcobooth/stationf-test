var mongoose = require('mongoose')
var { Schema } = mongoose

var companySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  website: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  // THIS NEEDS TO BE UNIQUE AS WELL
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  // img: {
  //   data: Buffer,
  //   contentType: String,
  //   required: true
  // },
  verified: {
    type: Boolean,
    default: false
  } // status in Station F
});

var Company = mongoose.model('Company', companySchema);

module.exports = Company
