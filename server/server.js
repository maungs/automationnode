var http = require('http')
var port = process.env.port || 1337;
var ws = require('websocket.io')
    , http = require('http').createServer().listen(port)
    , server = ws.attach(http)

server.on('connection', function (socket) {
    socket.on('message', function () { });
    socket.on('close', function () { });
});


