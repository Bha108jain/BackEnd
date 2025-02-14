const http = require("http");
const Users = [
  { id: 1, name: "john", email: "dfbcbvcirnnvnrfjrifji" },
  { id: 1, name: "john", email: "dfbcbvcirnnvnrfjrifji" },
  { id: 1, name: "john", email: "dfbcbvcirnnvnrfjrifji" },
];

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(Users));
});

server.listen(9000, (err) => {
  if (err) console.error(err);
  else console.log("Server is running on port 9000");
});
