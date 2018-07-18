var http=require('http')
var fs = require('fs');
var url = require('url');
http.createServer((req,res) => {
    req.read()
    res.end();
}).listen(1337);

console.log('Run server!');