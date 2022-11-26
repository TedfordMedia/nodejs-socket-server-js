import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from "dotenv"
dotenv.config()

function dTools() {
    this.theName = "mainTools";

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
            console.log('Message Create: ', message.content, 'from: ', message.author.username);
            if (message.content === '!ping') {
                message.channel.send('Pong 123.');
            }
        });
    }
}
export default new dTools();
