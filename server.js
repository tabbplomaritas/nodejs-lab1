"use strict";

const http = require("http");
const colors = require("./colors");

http.createServer((request, response) =>{
  console.log("The server is on port 8080!");
  console.log(colors);
  
  let myColor = colors[Math.floor(Math.random() * colors.length)];
    
  response
  .writeHead(200, {
    "Content-type": "text/plain"
  })
  response.write(`${myColor}`);
  response.end()

}).listen(8080);