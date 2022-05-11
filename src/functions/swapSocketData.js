import socket from "../socket";
import {addMessage, addUser, deleteMessage, deleteUser} from "../redux/actions";

export const swapSocketData = (dispatch, socketUser) => {
  socket.emit('JOIN', socketUser);
  socket.on('GET_DATA', ( users, messages, join) => {
    dispatch(addUser({socketUser, users, join}));
    dispatch(addMessage(messages));
  });
  socket.on('CHANGE_DATA', (user) => {
    dispatch(deleteUser(user));
  });
  socket.on('ADD_MESSAGE', (data) => {
    dispatch(addMessage(data));
  });
  socket.on('DELETE_MESSAGE', (data) => {
    dispatch(deleteMessage(data));
  })
};