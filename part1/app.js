const http = require('http');
const fs = require('fs');

const srv = http.createServer((req, res) => {
  if (req.url == '/') {
    res.writeHead(200,{ 'Content-Type': 'text/html' });
    fs.readFile("views/home.html",function(err,data){
      res.write(data);
      res.end();
    })
  } else if (req.url == '/about') {
    res.writeHead(200,{ 'Content-Type': 'text/html' });
    fs.readFile("views/about.html",function(err,data){
      res.write(data);
      res.end();
    })
  } else if (req.url == '/contact') {
    res.writeHead(200,{ 'Content-Type': 'text/html' });
    fs.readFile("views/contact.html",function(err,data){
      res.write(data);
      res.end();
    })
  }

  else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('404 Not Found');
  }
});

srv.listen(8080);

