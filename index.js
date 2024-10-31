// index.js

const server = require('ws').Server;
const ws = new server({ port: 8081 });

console.log('Server started!');

ws.on('connection', socket => {
  console.log('connected!');

  socket.on('message', ms => {
    // buffer to string
    console.log(ms.toString());

    ws.clients.forEach(client => {
      client.send('message from server');
    });
  });

  socket.on('close', () => {
    console.log('good bye.');
  });
});