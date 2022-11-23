const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);

const hostname = '0.0.0.0';
const port = 80;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/html/index.html');
});
app.get('/chat', (req, res) => {
  res.sendFile(__dirname + '/html/chat.html');
});

server.listen(port, hostname, () => {

  console.log(`v1.1 Server running at http://${hostname}:${port}/`);

});