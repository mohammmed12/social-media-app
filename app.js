const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));

const postRoutes = require("./routes/posts");

app.use("/", postRoutes);

port = 8000;
app.listen(port, () => console.log("server started"));
