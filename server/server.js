const express = require('express');
const app = express();
const path = require("path");
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
app.use(express.static(path.join(__dirname, '../build')));


const chat = new Map();

app.get('/express_backend', (req, res) => {
  res.send({ express: 'BACKEND IS CONNECTED TO REACT' });
})

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
    chat.get('users').set(socket.id, {name: data.userName});
    const users = [...chat.get('users').values()];
    const messages = [...chat.get('messages').values()];
    const join = true;
    io.sockets.emit('GET_DATA', users, messages, join);
  });

  socket.on('ADD_MESSAGE', (data) => {
    chat.get('messages').set(data.uniqId, data);
    socket.broadcast.emit('ADD_MESSAGE', data);
  });

  socket.on('DELETE_MESSAGE', (data) => {
    chat.get('messages').delete(data);
    socket.broadcast.emit('DELETE_MESSAGE', data);
  })

  socket.on('disconnect', () => {
    try {
      const user = chat.get('users').get(socket.id).name;
      chat.forEach(el => el.delete(socket.id));
      io.sockets.emit('CHANGE_DATA', user);
    } catch (err) {
      console.log(err);
    }
  });
});

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});