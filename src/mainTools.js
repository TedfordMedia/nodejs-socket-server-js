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
            // zthis.io.emit('message', "io message this is a test " + msg);
            socket.broadcast.emit('message', msg);
        });
        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    }
}
export default new mainTools();


        // var xthis = this;

        // this.socket.on('subscribe', function (x) {
        //     xthis.subscribeToRoom(x);
        // });
        // this.socket.on('sendNewPass', function (x) {
        //     insertPassword(socket, x);
        // });
        // this.socket.on('login', function (x) {
        //     xthis.do_melogin(x, request, socket);
        // });
        // this.socket.on('logofffffff', function (x) {
        //     xthis.do_melogoff(x, request, socket);
        // });
        // this.socket.on('sendPassInsertUser', function (x) {
        //     xthis.sendPassInsertUser(x, request, socket);
        // });
        // this.socket.on('room message', function (x) {
        //     xthis.processRoomMessage(x);//
        // });