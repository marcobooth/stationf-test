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
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  img: {
    data: Buffer,
    contentType: String,
    required: true
  },
  verified: {
    type: Boolean,
    default: false
  } // status in Station F
});
