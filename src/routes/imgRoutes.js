const express = require("express");
const router = express.Router();

const uploadIMG = require("../controllers/imgControlers");

router.post("/upload", uploadIMG.upload);
router.get("/image", uploadIMG.image);
router.get("/imageName", uploadIMG.imageName);

module.exports = router;
