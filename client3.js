const io = require('socket.io-client');

// Require Bearer Token
const socket = io('http://localhost:3000');

socket.on('connect', (data) => {
    socket.emit('storeClientInfo', JSON.stringify({ customId: '999' }));
    console.log('connected');
});

// socket.emit('messages', {
//     toid: '1234',
//     msg: 'from 999 to 1234',
// });

// Listening to events
socket.on('messages', (data) => {
    console.log(data);
});
