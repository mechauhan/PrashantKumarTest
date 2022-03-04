const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema(
  {
    name: String,
    profilePic: String,
    email: String,
    mobile: String,
    dob: Date,
    jobType: String,
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model('Content', contentSchema);
