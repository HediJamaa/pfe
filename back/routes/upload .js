const express = require("express");
const multer = require("multer");
const path = require("path");

const uploadRouter = express.Router();

// إعداد مكان حفظ الصور
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // لازم يكون عندك فولدر 'uploads' في البروجكت
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Route لرفع صورة
uploadRouter.post("/", upload.single("file"), (req, res) => {
  try {
    res.status(200).send({ filename: req.file.filename });
  } catch (error) {
    res.status(500).send("Upload failed");
  }
});

module.exports = uploadRouter;
