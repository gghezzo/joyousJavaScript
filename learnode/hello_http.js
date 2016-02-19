var http = require('http');		// http core module, like an import? 

// req is a readable stream that emits data events (file upload or form submission)
// res is a writeable stream - sends data back to the client 
var server = http.createServer(function(req,res) {	
	res.writeHead(200);			// Ok header 
	res.end('Hello Ginny ... I love you! ');
});
server.listen(8080);