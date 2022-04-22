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
  // const {userName} = req.body;
  //?
  if (!chat.size) {
    chat
      .set('users', new Map)
      .set('messages', new Map)
  }
  res.send();
  // console.log(req.body);
})

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);
  socket.on('JOIN', (data) => {
    socket.join(data);
    chat.get('users').set(socket.id, data.userName);
    const users = [...chat.get('users').values()];
    io.sockets.emit('SAVE_USERS', users);
    console.log(chat)

  })
  socket.on('disconnect', () => {
    console.log('disconnect', chat)
    if (chat.size) {
      console.log('chat' + chat)
      chat.forEach(el => el.delete(socket.id));
      const users = [...chat.get('users').values()];
      io.sockets.emit('SAVE_USERS', users);
      console.log('user disconnected', socket.id, users);
    }
  })
});

server.listen(4000, () => {
  console.log('listening on *:4000');
});