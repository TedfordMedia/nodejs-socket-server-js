function sockClientTools() {
    let zthis = this;
    this.checkSocketClientBasic = function (socket) {
        socket.on('connect', function () {
            console.log('Connected to server');
        });
        socket.on('disconnect', function () {
            console.log('The client has disconnected!');
        });
    }
    this.checkSocketChat = function (socket) {
        socket.on('chat message', function (msg) {
            console.log('Received a chat message from the server!', msg);
            var item = document.createElement('li');
            item.textContent = msg;
            messages.appendChild(item);
            window.scrollTo(0, document.body.scrollHeight);
        });
    }
    this.checkThreeChat = function (socket, threeTools) {
        console.log('check for Three chat messages')
        socket.on('three message', function (msg) {
            zthis.processThreeMessage(msg, threeTools)
        });
    };
    this.get_url_extension = function (url) {
        console.log('get_url_extension: ', url)
        return url.split(/[#?]/)[0].split('.').pop().trim();
    }
    this.processAttachments = function (msg, threeTools) {
        console.log('processAttachments: ', msg)
        msg.attachments.forEach(attachment => {
            console.log('attachment: ', attachment)
            console.log(attachment.url);
            if (this.get_url_extension(attachment.url) === "glb") {
                threeTools.loadGlb(attachment.url);
            }
        });
    }
    this.processThreeMessage = function (msg, threeTools) {
        console.log('Received a Three.js message from the server!', msg);

        if (msg.attachments && msg.attachments.length > 0) {
            this.processAttachments(msg, threeTools)
        } else {
            console.log(msg)
            if (msg.fullMsg.includes('cube')) {
                console.log('cube')
                threeTools.makeCube();
            }
            if (msg.fullMsg.includes('sphere')) {
                console.log('sphere')
                threeTools.makeSphere();
            }
            if (msg.fullMsg.includes('text')) {
                console.log('text')
                threeTools.makeText();
            }

        }

    };
}
export default new sockClientTools();