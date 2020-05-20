const express = require("express");
const { getPosts, createPost } = require("../controllers/posts");
const { requireSignin } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const validator = require("../validator/index");

const router = express.Router();

router.get("/", getPosts);
router.post("/post", requireSignin, validator.createPostValidator, createPost);

// any route containing :userId, our app will first execute userByID()
router.param("userId", userById);

module.exports = router;
