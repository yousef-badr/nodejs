const http = require('http');
const fs = require('fs');
const path = require('path');

const srv = http.createServer((req, res) => {
  if (req.url.startsWith('/public/')) {
    const filePath = path.join(__dirname, req.url);
    fs.readFile(filePath, (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    });
  }

  else if (req.url == '/') {
    const filePath = path.join(__dirname, '/views/home.html');
    return servePage(filePath, res);
  } else if (req.url == '/about') {
    const filePath = path.join(__dirname, '/views/about.html');
    return servePage(filePath, res);
  } else if (req.url == '/contact') {
    const filePath = path.join(__dirname, '/views/contact.html');
    return servePage(filePath, res);
  }

  else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('404 Not Found');
  }
});

function servePage(filePath, res) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end('404 Not Found');
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
}

srv.listen(8080);

