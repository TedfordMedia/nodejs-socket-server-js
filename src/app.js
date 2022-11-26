import http from 'http';
import express from 'express';
import { Server } from "socket.io";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import mainTools from './mainTools.js';
import  dTools  from './discordTools.js';
dTools.mainPart();

// const { Client, GatewayIntentBits } = require('discord.js');

// console.log('Client setup 1/2');

// const client = new Client({
//     intents: [
//         GatewayIntentBits.Guilds,
//         GatewayIntentBits.GuildMessages,
//         GatewayIntentBits.MessageContent,
//         GatewayIntentBits.GuildMembers,
//     ],
// });
//     client.login(process.env.DISCORDJS_BOT_TOKEN);

// console.log('Client setup 2/2')

// myTools.clientListener(client); 



const app = express();
const server = http.createServer(app);
const hostname = '0.0.0.0';
const port = 80;
const io = new Server(server);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


import dotenv from "dotenv"
dotenv.config()

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/html/index.html');
});
app.get('/chat', (req, res) => {
  res.sendFile(__dirname + '/html/chat.html');
});
app.get('/three', (req, res) => {
  res.sendFile(__dirname + '/html/three.html');
});
mainTools.setupIo(io);

io.on('connection', (socket) => {
  console.log('a user connected');
  mainTools.checkSocketIncoming(socket);
});

server.listen(port, hostname, () => {

  console.log(`v2 Server running at http://${hostname}:${port}/`);

});