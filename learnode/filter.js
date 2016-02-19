// This is Exercise 5 of 13 from http://nodeschool.io/#workshoppers
// Print the list of files with a particular extention in a directory 
// argv[2] = name of the directory 
// argv[3] = file extension to filter by (no .)
// Print one line per file 

var fs = require('fs');
var path = require('path')
var directory = process.argv[2];				// I hope this is in the right format
var ext = '.' + process.argv[3];
var myList = []

//console.log('directory = ' + directory);
//console.log('ext = ' + ext);

fs.readdir(directory, function(err,files) {
	if (err) throw err;
	for(var i = 0; i < files.length; i++) {
		// console.log(files[i])
		if (path.extname(files[i]) == ext) {
			myList.push(files[i]);
			console.log(files[i]);
		}
	}
});

// There Answer 
// var fs = require('fs')
//     var path = require('path')

//     fs.readdir(process.argv[2], function (err, list) {
//       list.forEach(function (file) {
//         if (path.extname(file) === '.' + process.argv[3])
//          console.log(file)
//       })
//     })
