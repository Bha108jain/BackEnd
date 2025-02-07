const fs = require('fs');

const data = fs.readFileSync('./data.txt','utf8');
console.log(data)

const newData = "i am new data";

fs.writeFileSync('./data.txt',newData);
