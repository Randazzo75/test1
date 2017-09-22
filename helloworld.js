var http = require('http');
var mate = require('mathTest')
var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    res.end(mate.sum(7,6).toString());
  })
  
  server.listen(1337, '127.0.0.1');
  
  console.log('Server running at http://127.0.0.1:1337/');
