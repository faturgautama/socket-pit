const io = require('socket.io-client');

// Require Bearer Token
const socket = io('http://localhost:3000');

socket.on('connect', (data) => {
    socket.emit('storeClientInfo', JSON.stringify({ customId: '567' }));
    console.log('connected');
});

// Listening to events
socket.on('messages', (data) => {
    console.log(data);
});

// socket.emit('messages', {
//     toid: '999',
//     msg: 'from 567 to 999',
// });
