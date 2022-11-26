import http from 'http';
import express from 'express';
import { Server } from "socket.io";
import mainTools from './mainTools.js';
import dTools from './discordTools.js';
import { doRouting } from './routing.js';
dTools.mainPart();
dTools.createClient();

const app = express();
const server = http.createServer(app);
const hostname = '0.0.0.0';
const port = 80;
const io = new Server(server);

doRouting(app);

mainTools.setupIo(io);

io.on('connection', (socket) => {
  console.log('a user connected');
  mainTools.checkSocketIncoming(socket);
});

server.listen(port, hostname, () => {

  console.log(`v2 Server running at http://${hostname}:${port}/`);

});