const multer = require('multer');
const path = require("path");


const storage = multer.diskStorage({
  destination: 'storage/Uploads/',
  filename: (req, file, cb) => cb(null, `${file.originalname}`)
});

const fileFilter = function (req, file, cb) {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Only PDF files are allowed!"), false);
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;    