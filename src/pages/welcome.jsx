import React from 'react';
import socket from "../socket";
import {addMessage, addUser} from "../redux/actions";
import {useDispatch} from "react-redux";
import getRandomName from "../functions/getRandomName";
import axios from "axios";

const Welcome = ({changeOpen, changeName}) => {
  const dispatch = useDispatch();

  const openChat = async () => {
    const userName = getRandomName();
    const socketUser = {
      userName
    }
    changeName(userName);

    await axios.post('http://localhost:4000', socketUser)
    socket.emit('JOIN', socketUser)
    socket.on('GET_DATA', (users, messages) => {
      dispatch(addUser(users));
      dispatch(addMessage(messages));
    })

    changeOpen(true);
  };

  return (
    <div className="welcome-block">
      <h1 className='welcome__title'>Welcome on chat</h1>
      <button
        onClick={openChat}
        className='welcome__btn'
      >
        Log in
      </button>
    </div>
  );
};

export default Welcome;