const io = require('socket.io-client');

// Require Bearer Token
const socket = io('http://localhost:3000');



socket.on('connect', (data) => {
    socket.emit('storeClientInfo', JSON.stringify({ customId: '1234' }));
    console.log('connected');
});

// setTimeout(() => {
//     socket.emit(
//         'messages',
//         JSON.stringify({
//             toid: 'd56de9811bb29388bc0ad9891212d32cab837c3df5b1ce3d96320091d5f493e8',
//             msg: 'from 1234 to 567',
//         })
//     );
// }, 5000);

const tiket = {
    no_register: '000999',
    nama_pasien: 'TANJIRO KAMADO',
    nama_poli: 'POLI DALAM',
};

setTimeout(() => {
    socket.emit(
        'print:ticket-admisi-irja',
        JSON.stringify({
            toid: 'c24668b1bf53ef5ddf190f656144b75c827f6511387c31a4f217de778e1fa988',
            msg: tiket,
        })
    );
}, 5000);

// // Listening to events
// socket.on('messages', (data) => {
//     console.log(data);
// });
