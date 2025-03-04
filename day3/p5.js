const http = require("http");
const fs = require("fs/promises");

const server = http.createServer(async (req, res) => {
  res.setHeader(200, { "content-type": "application/json" });
  if (req.url === "/getdata" && req.method === "GET") {
    const data = await fs.readFile("./data.json");
    res.end(JSON.stringify(data));
  }
});

server.listen(9000, (err) => {
  if (err) console.log(err);
  else console.log("Sever is running on the port 9000");
});
