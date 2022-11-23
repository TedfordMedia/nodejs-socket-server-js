const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);

const hostname = '0.0.0.0';
const port = 80;



// const server = http.createServer((req, res) => {

//     res.statusCode = 200;

//     res.setHeader('Content-Type', 'text/plain');

//     res.end('Hello World v1');

// });

app.get('/', (req, res) => {
    res.send('<h1>Hello world app get </h1>');
});


server.listen(port, hostname, () => {

    console.log(`Server running at http://${hostname}:${port}/`);

});