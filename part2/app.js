const http = require('http');
const url = require('url');
const qs = require('querystring');

const srv = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url);
  if (pathname === '/register' && req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', () => {
      const { name, email, password } = qs.parse(body);
      if (password.length < 8) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Error: Password is less than 8 characters');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Registration success');
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});
srv.listen(8080);
