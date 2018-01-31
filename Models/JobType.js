var mongoose = require('mongoose');
var { Schema } = mongoose;

// ASKTEO: does this look right? For initiali(s/z)ing all the enums

var jobTypeSchema = new Schema({
  name: {
    type: String,
    enum: ['Technical', 'Non-technical'],
    required: true
  }
});

module.exports = jobTypeSchema

// var JobType = mongoose.model('JobType', jobTypeSchema);

// Maybe should consider putting the schema directly into Company and Notificaiton
// not bother with putting these directly into the database

// JobType.findOne({ name: 'Technical' }, function(err, jobType) {
//   if (!jobType) {
//     new JobType({ name: 'Technical'}).save((err, user) => {
//       if (err) {
//         console.log("Error - could not create jobType: ", err);
//       }
//     })
//   }
// })
//
// JobType.findOne({ name: 'Non-technical' }, function(err, jobType) {
//   if (!jobType){
//     new JobType({ name: 'Non-technical'}).save((err, user) => {
//       if (err) {
//         console.log("Error - could not create jobType: ", err);
//       }
//     })
//   }
// })

// module.exports = JobType
// prevent more from being added
