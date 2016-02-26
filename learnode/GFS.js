// This is Exercise 11 of 13 from http://nodeschool.io/#workshoppers
 // Serve a file for each request it receives. Must use fs.createReadStream()
 // argv[2] is the port to listen on 
 // argv[3] is the file to serve using fs.createReadStream
 // note: I don't know the difference between an HTTP Server and a TCP Server :( )

 var http = require('http');
 var fs = require('fs');
 var port = process.argv[2];
 var file = process.argv[3];

 
 /* console.log("Hi Port ", port); */
 
 function handleCon(req, res) {
 	/*Called once for each connection received by my server */
 	/* Use request to fetch properties and response sends data. Both node streams */
 	/* response.write() and .end() */
 	/* console.log("Entering handle with file ", file); */ 
 	var src = fs.createReadStream(file);			/* The file from the cmd line */ 
 	src.on('open', function() {
 		src.pipe(res);
 	});
 	src.on('error', function(err) {
 		res.end(err); 
 	});
 }


 /* todo use src.pipe(?dst?) */
 var server = http.createServer(handleCon);
 /* console.log("Hi Server", server.members); */ 
 server.listen(port);

/* 
  Here's the official solution in case you want to compare notes:

 ─────────────────────────────────────────────────────────────────────────────

     var http = require('http')
     var fs = require('fs')

     var server = http.createServer(function (req, res) {
       res.writeHead(200, { 'content-type': 'text/plain' })

       fs.createReadStream(process.argv[3]).pipe(res)
     })

     server.listen(Number(process.argv[2]))

     */ 