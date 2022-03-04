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
  });
};

exports.updateData = async (model, req) => {
  let { contentId } = req.params;
  let contentData = await db.findOne(model, { _id: contentId });
  let exerciseName = req.body.exerciseName || contentData.exerciseName;
  let imageMap = req.body.images;
  let videoMap = req.body.videos;

  if (req.files) {
    imageMap = req.files.images.map((m) => {
      let image = LOCALIMAGEPATH + m.filename;
      return image;
    });
    videoMap = req.files.images.map((m) => {
      let image = LOCALIMAGEPATH + m.filename;
      return image;
    });
  }
  return await db.findAndUpdate(
    model,
    { _id: contentId },
    { images: imageMap, exerciseName: exerciseName, videos: videoMap },
    { new: true }
  );
};

exports.deleteData = async (model, req) => {
  let { contentId } = req.params;
  return await db.remove(model, { _id: contentId });
};
