var mongoose = require('mongoose');
var { Schema } = mongoose;

var jobTypeSchema = new Schema({
  name: {
    type: String,
    enum: ['Technical', 'Non-technical'],
    required: true
  }
});

module.exports = jobTypeSchema
