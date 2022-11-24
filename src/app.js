const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const hostname = '0.0.0.0';
const port = 80;
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/html/index.html');
});

app.get('/chat', (req, res) => {
  res.sendFile(__dirname + '/html/chat.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('chat message', (msg) => {
    console.log('received chat message: ' + msg);
  });
});

server.listen(port, hostname, () => {

  console.log(`v2 Server running at http://${hostname}:${port}/`);

});