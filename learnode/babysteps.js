// This is Exercise one from http://nodeschool.io/#workshoppers
// Write a program that accepts one or more numbers as command-line arguments and prints the sum of those numbers to the console (stdout).
// 2 of 13 
var parameters = process.argv;
var parlen = parameters.length;
var total = 0;
//console.log(parameters); 			// node.exe and name of file babysteps.js 
//console.log(parameters[2])
for (var i=2; i < parlen;i++) {
	total += Number(parameters[i]);
}
console.log(total);
