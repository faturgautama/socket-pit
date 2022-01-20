const io = require('socket.io-client');

// Require Bearer Token
// const socket = io('http://174.138.22.139:4444');
const socket = io('http://localhost:3000');

// Listening to events
socket.on('pis:update-antrian', (data) => {
    console.log(data);
});
