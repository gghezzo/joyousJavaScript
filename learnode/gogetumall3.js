// This is Exercise 9 of 13 from http://nodeschool.io/#workshoppers
//  Write a program that performs an HTTP GET request to three URLs provided to you
//  as the first three command-line argument. Collect all data from the server (not
//  just the first "data" event) and then write two lines to the console
//  (stdout).
// 		* line 1 = integrer = # of characters received 
//		* line 2 = complete string of characters sent 
// hint - file:///C:/Users/ginny/AppData/Roaming/npm/node_modules/learnyounode/node_apidoc/http.html#http_http_get_options_callback

var fs = require('fs');
var path = require('path');
var directory = process.argv[2];
var http = require('http');
var mybigpile = ['','',''];
var count = 0; 

mybigpile.forEach(function(item,index) {
	http.get(process.argv[index+2], function(res) {
		//console.log(res.statusCode);
		res.setEncoding('utf8');
		res.on('data',function(chunk) {
			mybigpile[index] += chunk;
			})
		res.on('error', function(e) {
			console.log("Got error: " + e.message); 
			});
		res.on('end', function(res) {
//			console.log(mybigpile.length + ' count = ' + count);
			if (count == 2) {
				console.log(mybigpile[0]); 
				console.log(mybigpile[1]);
				console.log( mybigpile[2]  );
			} else { count +=1; }
				
	}); 
});
})
/* ***********************
// The right answer 
    var http = require('http')
     var bl = require('bl')
     var results = []
     var count = 0

     function printResults () {
       for (var i = 0; i < 3; i++)
         console.log(results[i])
     }

     function httpGet (index) {
       http.get(process.argv[2 + index], function (response) {
         response.pipe(bl(function (err, data) {
           if (err)
             return console.error(err)

           results[index] = data.toString()
           count++

           if (count == 3)
             printResults()
         }))
       })
     }

     for (var i = 0; i < 3; i++)
       httpGet(i)
*************************** */ 