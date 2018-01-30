var jobTypeSchema = new Schema({
  name: {
    type: String,
    enum: ['Technical', 'Non-technical'],
    required: true
  }
});
