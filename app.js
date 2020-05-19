const express = require("express");
const app = express();

const { getPosts } = require("./routes/posts");

app.get("/", getPosts);

port = 8000;
app.listen(port, () => console.log("server started"));
