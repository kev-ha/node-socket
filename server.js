const net = require('net');
const port = 2424;

console.log(`Starting server, listening at localhost:${port}`);

const server = net.createServer((socket) => {
  const remoteAddress = `${socket.remoteaddress}:${socket.remotePort}`;
  console.log('client connected: ', remoteAddress);

  socket.on('error', (error) => {
    console.error(error);
  });

  socket.on('data', (request) => {
    // Handle request here
    socket.write(request);
    console.log(`Data from ${socket.remoteaddress}:${socket.remotePort} === ${request}`)
  });

  socket.on('close', () => {
    console.log('client disconnect: ', remoteAddress);
  });
});

server.listen(port);


// const http = require('http');
//
// const localhost = '127.0.0.1';
// const port = 2424;
//
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });
//
// server.listen(port, localhost, () => {
//   console.log(`Server running at http://${localhost}:${port}/`);
// });
