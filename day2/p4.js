const fs = require("fs");

fs.unlink("./mydir/data.txt", (err) => {
  if (err) console.log(err);
  else console.log("file deleted");
});
