
const http = require('http');
const path = require('path');   
const express = require('express');
const {Server} = require('socket.io');


const PORT = 3001;
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Socket.io
io.on("connection", (socket) => {
    // console.log("New User Connected", socket.id);
    socket.on('user-message', (message) => {
        // console.log("New User Message", message);
        io.emit('Msg', message);
    });
});

app.use(express.static(path.resolve("/public")));

app.get('/', (req, res) => {
    return res.sendFile('./public/index.html');
})

server.listen(PORT, () => console.log(`Server started at PORT :: (http://localhost:${PORT}/) : `));
// (http://localhost:3001/) 