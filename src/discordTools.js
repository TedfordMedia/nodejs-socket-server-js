function dTools() {
    this.theName = "mainTools";

    this.mainPart = function () {
        console.log("mainTools.mainPart()");
    }
    this.clientListener = function (client) {
        if (!client) { console.log('clientListener: client is null'); return; }
        client.on('ready', () => {
            console.log(`${client.user.username} Logged in as ${client.user.tag} :-)`);
        });

        client.on('message)', message => {
            console.log('Message: ', message.content, 'from: ', message.author.username);
            if (message.content === '!ping') {
                message.channel.send('Pong.');
            }
        });
        client.on('messageCreate', message => {
            console.log('Message Create: ', message.content, 'from: ', message.author.username);
            if (message.content === '!ping') {
                message.channel.send('Pong.');
            }
        });
    }
}
export default new dTools();
