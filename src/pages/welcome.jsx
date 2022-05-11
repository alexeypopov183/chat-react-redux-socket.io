import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useDispatch} from "react-redux";

import {getRandomName} from "../functions/getRandomName";
import {fetchImg} from "../redux/asyncAction/fetchImg";
import {swapSocketData}from "../functions/swapSocketData";

const Welcome = () => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchImg());
  },[])

  const getSocketUser = () => {
    const userName = getRandomName();
    return {
      userName
    };
  };
  const socketUser = getSocketUser();

  const openChat = async () => {
    setLoading(true);
    try {
      await axios.post('http://localhost:3001', socketUser);
      swapSocketData(dispatch, socketUser);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

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