const db = require('../utils/dboperations');
const LOCALIMAGEPATH = 'http://localhost:4000/';

exports.saveData = async (model, req) => {
  console.log('req.file', req.file);
  let imagePath;
  if (req.file) {
    imagePath = LOCALIMAGEPATH + req.file.filename;
  }

  return await db.saveData(model, {
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    dob: req.body.dob,
    profilePic: imagePath,
    jobType: req.body.jobType,
  });
};

exports.updateData = async (model, req) => {};

exports.deleteData = async (model, req) => {
  let { id } = req.params;
  return await db.remove(model, { _id: id });
};

exports.getAll = async (model, req) => {
  return await model.find({});
};
