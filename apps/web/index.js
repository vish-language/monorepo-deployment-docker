const http = require('http');

const port = process.env.PORT || 3001;

http
  .createServer((_, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ service: 'web', status: 'ok' }));
  })
  .listen(port, () => {
    console.log(`web listening on ${port}`);
  });
