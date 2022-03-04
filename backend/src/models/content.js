const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema(
  {
    name: String,
    profilePic: String,
    email: String,
    mobile: String,
    dob: Date,
    jobType: { type: String, enum: ['FT', 'PT', 'Consultant'] },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model('Content', contentSchema);
