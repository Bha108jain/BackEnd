const http = require("http");
const server = http.createServer(async (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  const data = await fetch("http://fakestoreapi.com/products");
  const products = await data.json();
  const myhtml = `<html>
    <head>
    <title>Products</title>
    <style> 
    .container{
    border:1px solid black;
    background-color:aqua;
    }
     </style>
    <body>
    <h1></h1>
    ${products.map((products) => {
      return `<div class="container">
        <h2>Title:${products.title}</h2>
        <p>Description:${products.description}</p>
        <p>Price:${products.price}</p>
        <img src="${products.image}" width="200" height="250" alt="${products.title}">
        </div>`;
    })}
    </head>
    </body>
  </html>`;
  res.end(myhtml);
});
server.listen(9000, (err) => {
  if (err) console.log(err);
  else console.log("Server is running at http://localhost:9000/");
});
