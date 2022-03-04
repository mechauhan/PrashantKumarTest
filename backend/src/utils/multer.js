const multer = require('multer');

const storage = multer.diskStorage({
  destination: './publics/upload',
  filename(req, file, cb) {
    let num = Math.round(
      Math.pow(36, 10 + 1) - Math.random() * Math.pow(36, 10)
    )
      .toString(36)
      .slice(1);
    var fileName = num + file.originalname;
    console.log(fileName, '88888888888888888');

    cb(null, fileName);
  },
});

exports.upload = multer({
  storage: storage,
  limits: { fileSize: 100000000 },
});
