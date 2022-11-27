import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from "dotenv"
import request from 'request';

import fs from 'fs';
function download(url) {
    request.get(url)
        .on('error', console.error)
        .on('response', function (response) {
            console.log('hello response ', response.statusCode) // 200
            console.log('response header', response.headers['content-type']) // 'image/png'
        })
        .pipe(fs.createWriteStream('meme.png'));

    // const fs = require('fs');
    // const imgFile = fs.readFileSync(filePath);
    // const imgBase64 = new Buffer(imgFile).toString('base64');
    // socket.broadcast.emit('img', imgBase64);
}


dotenv.config()

function dTools() {
    this.theName = "mainTools";
    this.io = null;

    this.mainPart = function () {
        console.log("mainTools.mainPart()");
    }
    this.createClient = function () {
        console.log('Create Discord Client');
        const client = new Client({
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.MessageContent,
                GatewayIntentBits.GuildMembers,
            ],
        });
        client.login(process.env.DISCORDJS_BOT_TOKEN);
        this.clientListener(client);

    }
    this.setupIo = function (io) {
        if (!io) { console.log('error no io'); return; }
        this.io = io;
        console.log("dTools.setupIo completed");
    }
    this.clientListener = function (client) {
        console.log('Discord Client Listening for messages');
        if (!client) { console.log('clientListener: client is null'); return; }
        client.on('ready', () => {
            console.log(`${client.user.username} Logged in as ${client.user.tag} :-)`);
        });

        client.on('message)', message => {
            console.log('Message: ', message.content, 'from: ', message.author.username);
            if (message.content === '!ping') {
                message.channel.send('Pong 123.');
            }
        });
        client.on('messageCreate', message => {
            if (message.content.includes('/three')) {
                if (this.io) {
                    message.channel.send('I sent update to Three.js clients');
                    var Attachment = (message.attachments)
                    if (Attachment) {
                        var myAttachments = [];
                        Attachment.forEach(attachment => {
                            console.log('temporary code here')
                            download(attachment.url);
                            myAttachments.push({ url: attachment.proxyURL })
                        });
                    }
                    this.io.emit('three message', { fullMsg: message.content, attachments: myAttachments });
                } else {
                    message.channel.send('No Three.js clients connected');
                }
            }
        });
    }
}
export default new dTools();
