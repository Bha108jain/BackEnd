const fs = require("fs");

const data = "I AM NEW DATA";
fs.writeFile("./data.txt", data, (err) => {
  if (err) throw err;
  console.log("File I s Created");
});
