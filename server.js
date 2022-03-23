const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    },
});

var clients = [];

app.get('/health', (req, res) => {
    res.send('Healthy');
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});

io.on('connection', (socket) => {
    socket.on('storeClientInfo', function (data) {
        var objData = JSON.parse(data);

        var clientInfo = new Object();
        clientInfo.customId = objData.customId;
        clientInfo.clientId = socket.id;
        clients.push(clientInfo);

        console.log(`a user connected with id ${objData.customId}`);
        console.log(clients);
    });

    socket.on('disconnect', function (data) {
        for (var i = 0, len = clients.length; i < len; ++i) {
            var c = clients[i];

            if (c.clientId == socket.id) {
                clients.splice(i, 1);
                break;
            }
        }
    });

    socket.on('messages', (data) => {
        var objData = JSON.parse(data);

        if (clients.length > 0) {
            let result = clients.filter((obj) => {
                return obj.customId === objData.toid;
            });

            if (result[0] !== undefined) {
                console.log(result[0].clientId);
                console.log(objData.msg);
                socket.broadcast
                    .to(result[0].clientId)
                    .emit('messages', objData.msg);
            }
        }
    });

    socket.on('print:ticket-admisi-irja', (data) => {
        var objData = JSON.parse(data);

        if (clients.length > 0) {
            let result = clients.filter((obj) => {
                return obj.customId === objData.toid;
            });

            if (result[0] !== undefined) {
                console.log(result[0].clientId);
                console.log(objData.msg);
                socket.broadcast
                    .to(result[0].clientId)
                    .emit('print:ticket-admisi-irja', objData.msg);
            }
        }
    });

    socket.on('pis:update-antrian', (data) => {
        console.log(data);
        socket.broadcast.emit('pis:update-antrian', data);
    });

    socket.on('pis:update-bed-booking-terprogram', (data) => {
        console.log(data);
        socket.broadcast.emit('pis:update-bed-booking-terprogram', data);
    });
});
