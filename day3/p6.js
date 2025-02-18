const http = require("http");
const server = http.createServer(async (req, res) => {
  const data = await fetch("http://dummyjson.com/products");
  res.setHeader("Content-type", "application/json");
  const newproducts = await data.json();
  const myproducts = newproducts.products;
  const title = myproducts.map((product) => {
    return product.title;
  });
  //   console.log(myproducts);
  //   res.statusCode = 200;
  res.end(JSON.stringify(title));
});

server.listen(9000, (err) => {
  if (err) console.log(err);
  else console.log("Sever is running on the port 9000");
});
