const { Socket } = require('dgram');
const express = require('express');
const app = express();
const http = require('http');
const expressServer = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(expressServer);


let buyNsp=io.of("/buy");
buyNsp.on('connection',(Socket)=>{
  buyNsp.emit("MyEvent","hello Buy"); 
})


let sellNsp=io.of("/sell");
sellNsp.on('connection',(Socket)=>{
  sellNsp.emit("MyEvent","hello Sell");
})




app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

expressServer.listen(3000, () => {
  console.log("Server Run At 3000");
});