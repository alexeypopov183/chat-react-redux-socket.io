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
      <div className="message-block__title">
        {userName}
      </div>
      <div className="message-block__subtitle">
        <p>{message}</p>
        {encodeImage && <img className="message-block__subtitle-img" src={encodeImage} alt="image"/>}

        <div className="message-block__subtitle-close" onClick={() => deletedMessage(uniqId)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
            <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
          </svg>
        </div>

      </div>
    </div>
  );
};

export default Message;