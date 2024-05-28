const express = require("express");
const router = express.Router();

const uploadIMG = require("../controllers/imgControlers");

router.post("/upload", uploadIMG.upload);
router.get("/images", uploadIMG.image);
router.get("/image/:imageName", uploadIMG.imageName);

module.exports = router;
