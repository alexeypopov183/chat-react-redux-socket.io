import React from 'react';
import {useDispatch} from "react-redux";

import {addMessage} from "../redux/actions";
import socket from "../socket";

const Message = ({messageProp, currentUser}) => {
  const {userName, message, uniqId} = messageProp;
  console.log(messageProp)
  const dispatch = useDispatch();

  const deletedMessage = (id) => {
    if (userName === currentUser) {
      socket.emit('DELETE_MESSAGE', id)
      socket.on('DELETE_MESSAGE', data => {
        dispatch(addMessage(data));
      });
    }
  }

  return (
    <div className="message-block">
      {userName}: {message} <span style={{color: "red"}} onClick={() => deletedMessage(uniqId)}>x</span>
    </div>
  );
};

export default Message;