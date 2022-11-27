import sockClientTools from './sockClient.js';
var socket = io();

var form = document.getElementById('form');
var input = document.getElementById('input');
var messages = document.getElementById('messages');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (input.value) {
        socket.emit('chat message', input.value);
        var item = document.createElement('li');
        item.textContent = input.value;
        messages.appendChild(item);
        window.scrollTo(0, document.body.scrollHeight);
        input.value = '';
    }
});

sockClientTools.checkSocketClientBasic(socket);
sockClientTools.checkSocketChat(socket);
