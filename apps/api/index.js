const http = require('http');

const port = process.env.PORT || 3000;

http
  .createServer((_, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ service: 'api', status: 'ok' }));
  })
  .listen(port, () => {
    console.log(`api listening on ${port}`);
  });
