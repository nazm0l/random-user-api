const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Developers");
});

app.listen(5000, () => {
  console.log("Server Running");
});
