const http = require('http');



const hostname = '0.0.0.0';

const port = 80;



const server = http.createServer((req, res) => {

    res.statusCode = 200;

    res.setHeader('Content-Type', 'text/plain');

    res.end('Hello World v1');

});



server.listen(port, hostname, () => {

    console.log(`Server running at http://${hostname}:${port}/`);

});

process.on('SIGINT', function() {

    // sigint signal received, log a message to the console

    console.log('Shutdown signal intercepted');

    // close the http server

    server.close();

    // exit the process

    process.exit();

});