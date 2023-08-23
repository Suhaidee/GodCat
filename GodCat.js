var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello Humanoid species. I am a GodCat and you all are just my cute pets !!!');
});
server.listen(8080);