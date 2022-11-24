const http = require("http");
var fs = require("fs");
var index = fs.readFileSync("index.html", "utf8");

http
  .createServer(function (req, res) {
    var index = fs.readFileSync("index.html", "utf8");
    res.writeHead(200, { "Content-Type": "html" });
    res.end(index);
  })
  .listen(8082);
