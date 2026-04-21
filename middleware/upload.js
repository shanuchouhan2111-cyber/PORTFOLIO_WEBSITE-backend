const multer = require("multer");
const path = require("path");

// Storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/images"); // 👈 store images here
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext); // cleaner filename
  },
});

// File filter (only images)
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|webp/;

  const isMimeTypeValid = allowedTypes.test(file.mimetype);
  const isExtValid = allowedTypes.test(
    path.extname(file.originalname).toLowerCase(),
  );

  if (isMimeTypeValid && isExtValid) {
    cb(null, true);
  } else {
    cb(new Error("Only image files (jpg, jpeg, png, webp) are allowed"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 2 * 1024 * 1024, // 👈 2MB limit
  },
});

module.exports = upload;
