const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);

const hostname = '0.0.0.0';
const port = 80;

app.get('/', (req, res) => {
  // res.send('<h1>Hello world app get </h1>');
  res.sendFile(__dirname + '/html/index.html');
});

server.listen(port, hostname, () => {

  console.log(`v1.0 Server running at http://${hostname}:${port}/`);

});