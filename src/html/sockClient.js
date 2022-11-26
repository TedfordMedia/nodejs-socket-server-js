function sockClientTools() {

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
            console.log('Received a message from the server!', msg);
            var item = document.createElement('li');
            item.textContent = msg;
            messages.appendChild(item);
            window.scrollTo(0, document.body.scrollHeight);
        });
    }
}
export default new sockClientTools();