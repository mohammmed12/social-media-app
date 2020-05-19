const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hey there from node server");
});

port = 8000;
app.listen(port, () => console.log("server started"));
