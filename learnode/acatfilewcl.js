// This is Exercise four of 13 from http://nodeschool.io/#workshoppers
// Write a program that uses a single asynchronous filesystem operation to read a file and 
// print the number of newlines (\n) it contains to the console (stdout), 
// similar to running cat file | wc -l.
// All synchronous filesystem methods end with Sync 
// TODO: Think about why it is -1 
var fs = require('fs');
var total = 0;
fs.readFile(process.argv[2], 'utf8',function(err,data) {
	if (err) throw err;
	total = data.split('\n').length;
	console.log(total-1);
});

//   var fs = require('fs')
//   var file = process.argv[2]
//     fs.readFile(file, function (err, contents) {
//       // fs.readFile(file, 'utf8', callback) can also be used
//      var lines = contents.toString().split('\n').length - 1
//       console.log(lines)
//     })