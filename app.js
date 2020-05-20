const express = require("express");
const app = express();
const mongoose = require("mongoose");
const expressValidator = require("express-validator");
const cookieParser = require("cookie-parser");
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

// getting routes
const postRoutes = require("./routes/posts");
const authRoutes = require("./routes/auth");

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(morgan("dev"));

app.use("/", postRoutes);
app.use("/", authRoutes);

app.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: "Unauthorized!" });
  }
});

port = process.env.PORT || 8000;
app.listen(port, () => console.log("server started"));
