/*var http = require("http");

http.createServer(function(request, response) {
  console.log("Request received.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');*/

var express = require("express"); 
express().listen(8888);

//http://expressjs.com/guide.html
//https://www.exratione.com/2011/07/running-a-nodejs-server-as-a-service-using-forever/
