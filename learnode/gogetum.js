// This is Exercise 7 of 13 from http://nodeschool.io/#workshoppers
//  Write a program that performs an HTTP GET request to a URL provided to you
//  as the first command-line argument. Write the String contents of each
//  "data" event from the response to a new line on the console (stdout).
// hint - file:///C:/Users/ginny/AppData/Roaming/npm/node_modules/learnyounode/node_apidoc/http.html#http_http_get_options_callback

var fs = require('fs');
var path = require('path');
var directory = process.argv[2];
var http = require('http');

http.get(directory, function(res) {
	//console.log(res.statusCode);
	res.setEncoding('utf8');
	res.on('data',function(chunk) {
		console.log(chunk);
		})
	}).on('error', function(e) {
		console.log("Got error: " + e.message); 
	});