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
    this.checkThreeChat = function (socket) {
        console.log('check for Three chat messages')
        socket.on('three message', function (msg) {
            zthis.processThreeMessage(msg)
        });
    };
    this.processThreeMessage = function (msg) {
        console.log('Received a Three.js message from the server!', msg);
    };
}
export default new sockClientTools();