// This is Exercise 6 of 13 from http://nodeschool.io/#workshoppers
// Print the list of files with a particular extention in a directory 
// argv[2] = name of the directory 
// argv[3] = file extension to filter by (no .)
// Print one line per file 
// Do it as Mods

var fs = require('fs');
var path = require('path');

module.exports = function(directory, ext, callback) {
fs.readdir(process.argv[2], function (err, list) {
	if (err) return callback(err);
	var newList = [];
     list.forEach(function (file) {
         if (path.extname(file) === '.' + process.argv[3]) {
          	newList.push(file)
          }
       })
     callback(null, newList)
     })
}

//     var fs = require('fs')
//     var path = require('path')

     //module.exports = function (dir, filterStr, callback) {

//       fs.readdir(dir, function (err, list) {
//        if (err)
//           return callback(err)

//         list = list.filter(function (file) {
//           return path.extname(file) === '.' + filterStr
//         })

//         callback(null, list)
//       })
//     }