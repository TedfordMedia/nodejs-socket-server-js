function mainTools() {
    this.theName = "mainTools";
    this.socket = null;
    this.io = null;
    const zthis = this;


    this.mainPart = function () {
        console.log("mainTools.mainPart()");
    }
    this.setupIo = function (io) {
        if (!io) { console.log('error no io'); return; }
        this.io = io;
        console.log("mainTools.setupIo completed");
    }
    this.checkSocketIncoming = function (socket) {
        console.log("mainTools.checkSocketIncoming()");
        socket.on('chat message', (msg) => {
            console.log('received chat message: ' + msg);
            socket.broadcast.emit('message', msg);
        });
        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    }
}
export default new mainTools();