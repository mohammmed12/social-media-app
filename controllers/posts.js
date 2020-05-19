const Post = require("../models/posts.js");

exports.getPosts = (req, res) => {
  res.json({
    posts: [{ title: "first post" }, { title: "second post" }],
  });
};

exports.createPost = (req, res) => {
  const post = new Post(req.body);

  console.log("creating post : ", post);

  post.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.status(200).json({
      post: result,
    });
  });
};
