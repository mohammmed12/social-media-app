const express = require("express");
const app = express();
const mongoose = require("mongoose");

const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();

//db connect
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("db connected"));

mongoose.connection.on("error", (err) =>
  console.log(`db error ${err.message}`)
);

const postRoutes = require("./routes/posts");

// middleware
app.use(morgan("dev"));
app.use("/", postRoutes);

port = process.env.PORT || 8000;
app.listen(port, () => console.log("server started"));
