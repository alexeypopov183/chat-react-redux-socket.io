import React, {useEffect, useState} from 'react';
import socket from "../socket";
import axios from "axios";
import {useDispatch} from "react-redux";

import {addMessage, addUser, deleteUser} from "../redux/actions";
import getRandomName from "../functions/getRandomName";

const Welcome = () => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchFakeImg('', [], false));
  },[])

  const openChat = () => {
    setLoading(true);
    swapData(getSocketUser());
  };

  const randomNum = () => {
    return Math.floor(Math.random() * (50 - 1 + 1)) + 1;
  }

  const fetchFakeImg = (socketUser, users, join) => {
    return (dispatch) => {
      fetch(`https://jsonplaceholder.typicode.com/photos/${randomNum()}`)
        .then(res => res.json())
        .then(({url}) => dispatch(addUser({socketUser, url, users, join})));
    }
  }

  const getSocketUser = () => {
    const userName = getRandomName();
    return {
      userName: userName,
    };
  }

  const swapData = async (socketUser) => {
    await axios.post('http://localhost:4000', socketUser);
    socket.emit('JOIN', socketUser);
    socket.on('GET_DATA', ( users, messages, join) => {
      dispatch(addUser({socketUser, users, join}));
      dispatch(addMessage(messages));
    });
    socket.on('CHANGE_DATA', (user) => {
      dispatch(deleteUser(user));
    })
  }

  return (
    <div className="welcome-block">
      <h1 className='welcome__title'>Welcome on chat</h1>
      <button
        onClick={openChat}
        className='welcome__btn'
      >
        {isLoading ? 'Загрузка...' : 'Вход'}
      </button>
    </div>
  );
};

export default Welcome;