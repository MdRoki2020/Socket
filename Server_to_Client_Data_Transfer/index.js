const express = require('express');
const app = express();
const http = require('http');
const expressServer = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(expressServer);

io.on('connection', (socket) => {
  console.log("User Connected");

  socket.on('disconnect', () => {
    console.log("User Disconnected");
  });

  socket.on('error', (err) => {
    console.error("Socket Error:", err);
  });
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

expressServer.listen(3000, () => {
  console.log("Server Run At 3000");
});