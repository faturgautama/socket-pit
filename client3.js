const io = require('socket.io-client');

// Require Bearer Token
const socket = io('http://174.138.22.139:4444');

socket.on('connect', (data) => {
    console.log('connected');
});

socket.emit('pis:update-bed-booking-terprogram', {
    msg: 'update-bed-booking-terprogram',
});
