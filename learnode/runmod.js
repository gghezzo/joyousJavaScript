// This is Exercise 6 of 13 from http://nodeschool.io/#workshoppers
// Print the list of files with a particular extention in a directory 
// argv[2] = name of the directory 
// argv[3] = file extension to filter by (no .)
// Print one line per file 
// Do it as Mods

var fs = require('fs');
var path = require('path');
var mymodule = require('./mods.js');
var directory = process.argv[2];				// I hope this is in the right format
var ext = process.argv[3];
var myList = [];
// console.log('Start of  runmod.js ', ext, ' ', directory)
mymodule(directory, ext, function(err, data) {
//	console.log('wtf');
	if (err) console.log(err);
	for (i=0;i<data.length; i++) {
		console.log(data[i])
	}
})
// console.log('End of  runmod.js')

//     var filterFn = require('./solution_filter.js')
//     var dir = process.argv[2]
//     var filterStr = process.argv[3]

//     filterFn(dir, filterStr, function (err, list) {
//       if (err)
//         return console.error('There was an error:', err)

//       list.forEach(function (file) {
//         console.log(file)
//       })
//     })