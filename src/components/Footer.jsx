import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addMessage} from "../redux/actions";
import socket from "../socket";

const Footer = ({userName}) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const socketMessage = {
      message: message,
      userName: userName,
      uniqId: `${userName}:${Date.now()}`
    }
    socket.emit('NEW_MESSAGE', socketMessage)
    socket.on('NEW_MESSAGE', data => {
      dispatch(addMessage(data));
    })
  }

  return (
    <footer className="footer">
      <form className="footer__input" onSubmit={(e) => handleSubmit(e)}>
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
      </form>
    </footer>
  );
};

export default Footer;