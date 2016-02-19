// This is Exercise 10 of 13 from http://nodeschool.io/#workshoppers
// write a TCP time server. Listen to a TCP connection and write the date\time for each conection
// close the connect 
// argv1 = port to listen on 
// Exm "2013-07-06 17:42" + \n 
// note: not using HTTP , but raw TCP server and the net module 

var net = require('net');
var aport = process.argv[2];
var server = net.createServer(function (socket) {
//	console.log("Chickens Dance ALOT: ")
	// write data + close the socket + live happily ever after! 
	var date = new Date();
	var temp =  '';
	// todo need to check if month or day  is 1 to 9 and add a '0' 
	// todo need to check if month or day  is 1 to 9 and add a '0' 
	temp += date.getFullYear() + '-' + ('0'+ (date.getMonth()+1)).substr(-2) + '-' + ('0'+date.getDate()).substr(-2) + ' '+ ('0'+date.getHours()).substr(-2)+':'+('0'+date.getMinutes()).substr(-2) + '\n';
	socket.end(temp);
}); 
server.listen(aport)

/*
  Here's the official solution in case you want to compare notes:

 ─────────────────────────────────────────────────────────────────────────────

     var net = require('net')

     function zeroFill(i) {
       return (i < 10 ? '0' : '') + i
     }

     function now () {
       var d = new Date()
       return d.getFullYear() + '-'
         + zeroFill(d.getMonth() + 1) + '-'
         + zeroFill(d.getDate()) + ' '
         + zeroFill(d.getHours()) + ':'
         + zeroFill(d.getMinutes())
     }

     var server = net.createServer(function (socket) {
       socket.end(now() + '\n')
     })

     server.listen(Number(process.argv[2]))

     */ 
