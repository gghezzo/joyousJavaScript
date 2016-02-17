// This is Exercise one from http://nodeschool.io/#workshoppers
// Write a program that uses a single synchronous filesystem operation to read a file and 
// print the number of newlines (\n) it contains to the console (stdout), 
// similar to running cat file | wc -l.
// All synchronous filesystem methods end with Sync 
// TODO: Think about why it is -1 
var filepath = process.argv[2];
var total = 0;
var fs = require('fs');
var buffy = fs.readFileSync(filepath).toString().split('\n');	// returns a buffer object of the entire file 
total = buffy.length - 1;

console.log(total);
// Short answer :) 
 // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1