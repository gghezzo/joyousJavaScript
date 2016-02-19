
var fs = require('fs');
var path = require('path');
var directory = process.argv[2];
var http = require('http');

http.get(directory, function(res) {
	console.log(res.statusCode);
	res.setEncoding('utf8');
	res.on('data',function(chunk) {
		console.log(chunk);
	});
});

console.log('what');