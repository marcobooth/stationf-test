var mongoose = require('mongoose');
var { Schema } = mongoose;

var userSchema = new Schema({
  googleID: {
    type: String,
    required: true
  },
  email: String, //notifications
});

var User = mongoose.model('User', userSchema);

module.exports = User
