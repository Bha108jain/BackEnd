const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  if (req.url == "/home") {
    res.end("welcome to home");
  } else if (req.url == "/about") {
    res.end("welcome to the about");
  } else res.end("page not found");
});

server.listen(9000, (err) => {
  if (err) console.log(err);
  else console.log("Sever is running on the port 9000");
});
