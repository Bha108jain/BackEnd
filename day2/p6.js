const fs = require("fs");

fs.rmdir("mydir", (e) => {
  if (e) {
    console.error("error deleting :", e);
    return;
  }
  console.log("Directory deleted successfully");
});
