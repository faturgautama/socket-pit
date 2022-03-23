const io = require('socket.io-client');

// Require Bearer Token
const socket = io('http://174.138.22.139:4444');
// const socket = io('http://localhost:3000');

setTimeout(() => {
    console.log('update');
    socket.emit('pis:update-antrian', 'update-antrian');
}, 5000);

// // Listening to events
// socket.on('messages', (data) => {
//     console.log(data);
// });
