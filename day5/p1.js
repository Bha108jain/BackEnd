const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(9000, () => {
  console.log("server is running on the port 9000");
});
