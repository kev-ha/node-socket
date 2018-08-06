var net = require('net');

var HOST = 'localhost';
var PORT = 2424;

var client = new net.Socket();

client.connect(PORT, HOST, () => {
    console.log('Client connected to: ' + HOST + ':' + PORT);
    // Write a message to the socket as soon as the client is connected, the server will receive it as message from the client
    client.write('Hello World!');

});

client.on('data', data => {
    console.log('Client received data from server: ' + data);
     if (data.toString().endsWith('exit')) {
       client.destroy();
    }
});

// Add a 'close' event handler for the client socket
client.on('close', () => {
    console.log('Client closed');
});

client.on('error', err => {
    console.error(err);
});
