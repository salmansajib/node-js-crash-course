import http from 'http';
const PORT = 8000;

const server = http.createServer((req, res) => {
  // res.write('Hello World');
  // res.setHeader('Content-type', 'text/html');
  // res.statusCode = 404;

  res.writeHead(500, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Server Error' }));
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
