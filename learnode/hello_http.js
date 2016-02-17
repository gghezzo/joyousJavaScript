var http = require('http');

var server = http.createServer(function(req,res) {
	res.writeHead(200);
	res.end('Hello Ginny ... I love you! ');
});
server.listen(8080);