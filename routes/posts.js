const express = require("express");
const { getPosts, createPost } = require("../controllers/posts");
const validator = require("../validator/index");

const router = express.Router();

router.get("/", getPosts);
router.post("/", validator.createPostValidator, createPost);

module.exports = router;
