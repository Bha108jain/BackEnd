const express = require("express");
const fs = require("fs/promises");

const app = express();
app.use(express.json());

app.get("/users", (req, res) => {});

app.post("/reguser", (req, res) => {});

app.put("/users/:id", (req, res) => {});

app.delete("/users/:id", (req, res) => {});

app.listen(9000, () => {
  console.log("Server Is Running On Port 9000");
});
