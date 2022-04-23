import React from 'react';
import {useDispatch} from "react-redux";

import {addMessage} from "../redux/actions";
import socket from "../socket";

const Message = ({messageProp, currentUser}) => {
  const {userName, message, uniqId, encodeImage} = messageProp;
  console.log(messageProp)
  const dispatch = useDispatch();

  const deletedMessage = (id) => {
    if (userName === currentUser) {
      socket.emit('MESSAGE', id)
      socket.on('MESSAGE', data => {
        dispatch(addMessage(data));
      });
    }
  }

  return (
    <div className="message-block">
      {userName}: {message} <span style={{color: "red"}} onClick={() => deletedMessage(uniqId)}>x</span>
      {encodeImage && <img className="message-block__img" src={encodeImage} alt="image"/>}
    </div>
  );
};

export default Message;