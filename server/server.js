const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: '*',
  }
});
app.use(require('cors')());
app.use(express.json());

const chat = new Map();

app.get('/', (req, res) => {
  res.json(chat)
});

app.post('/', (req, res) => {
  if (!chat.size) {
    chat
      .set('users', new Map())
      .set('messages', new Map([]))
  }
  res.send();
})

io.on('connection', (socket) => {

  socket.on('JOIN', (data) => {
    socket.join(data);
    chat.get('users').set(socket.id, data.userName);
    const users = [...chat.get('users').values()];
    const messages = [...chat.get('messages').values()];
    io.sockets.emit('GET_DATA', users, messages);
  });

  socket.on('NEW_MESSAGE', (data) => {
    chat.get('messages').set(data.uniqId , data);
    const messages = [...chat.get('messages').values()];
    io.sockets.emit('NEW_MESSAGE', messages)
  })

  socket.on('disconnect', () => {
    if (chat.size) {
      chat.forEach(el => el.delete(socket.id));
      const users = [...chat.get('users').values()];
      io.sockets.emit('GET_DATA', users);
    }
  })
});


server.listen(4000, () => {
  console.log('listening on *:4000');
});