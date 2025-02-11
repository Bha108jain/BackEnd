const fs = require("fs");

fs.mkdir("mydir", (err) => {
  if (err) console.log("Error creating directory:", err);
  else console.log("Directory created");
});

const data = "i am inserted";
fs.writeFile("./mydir/data.txt", data, (err) => {
  if (err) console.log("Error writing file:", err);
  else console.log("File created and data inserted");
});
