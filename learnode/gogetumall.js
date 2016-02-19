// This is Exercise 7 of 13 from http://nodeschool.io/#workshoppers
//  Write a program that performs an HTTP GET request to a URL provided to you
//  as the first command-line argument. Collect all data from the server (not
//  just the first "data" event) and then write two lines to the console
//  (stdout).
// 		* line 1 = integrer = # of characters received 
//		* line 2 = complete string of characters sent 
// hint - file:///C:/Users/ginny/AppData/Roaming/npm/node_modules/learnyounode/node_apidoc/http.html#http_http_get_options_callback

var fs = require('fs');
var path = require('path');
var directory = process.argv[2];
var http = require('http');
var mybigpile = '';

http.get(directory, function(res) {
	//console.log(res.statusCode);
	res.setEncoding('utf8');
	res.on('data',function(chunk) {
		mybigpile += chunk;
		})
	res.on('error', function(e) {
		console.log("Got error: " + e.message); 
		});
	res.on('end', function(res) {
		console.log(mybigpile.length)
		console.log(mybigpile);
	});

});

// The real solution with bl :()
//     var http = require('http')
//     var bl = require('bl')

//     http.get(process.argv[2], function (response) {
//       response.pipe(bl(function (err, data) {
//         if (err)
//           return console.error(err)
//         data = data.toString()
//         console.log(data.length)
//         console.log(data)
//       }))
//     })
