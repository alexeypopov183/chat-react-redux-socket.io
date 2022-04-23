import React from 'react';
import socket from "../socket";
import axios from "axios";
import {useDispatch} from "react-redux";

import {addMessage, addUser} from "../redux/actions";
import getRandomName from "../functions/getRandomName";

const Welcome = ({changeOpen, changeName}) => {
  const dispatch = useDispatch();

  const openChat = () => {
    swapData(getSocketUser());
    changeOpen(true);
  };

  const getSocketUser = () => {
    const userName = getRandomName();
    const socketUser = {
      userName,
    };
    changeName(userName);
    return socketUser;
  }

  const swapData = async (socketUser) => {
    await axios.post('http://localhost:4000', socketUser)
    socket.emit('JOIN', socketUser)
    socket.on('GET_DATA', (users, messages) => {
      dispatch(addUser(users));
      dispatch(addMessage(messages));
    })
  }

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