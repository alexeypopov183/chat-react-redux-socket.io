import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import socket from "../socket";

import {deleteMessage} from "../redux/actions";

const Message = React.memo(({messageProp, currentUser}) => {
  const {userName, message, uniqId, encodeImage, img} = messageProp;
  const dispatch = useDispatch();
  const [isCurrentUser, setIsCurrentUser] = useState(false);

  useEffect(() => {
    if (userName === currentUser) {
      setIsCurrentUser(true);
    }
  }, [currentUser, userName]);

  const deletedMessage = () => {
    if (isCurrentUser) {
      dispatch(deleteMessage(uniqId));
      socket.emit('DELETE_MESSAGE', uniqId);
    }
  }

  return (
    <div className="message-block">
      <img className="message-block__icon" src={img} alt=""/>
      <div className="message-block__title">
        {userName}
      </div>
      <div className="message-block__subtitle">
        <p>{message}</p>
        {encodeImage && <img className="message-block__subtitle-img" src={encodeImage} alt="load-img"/>}
      </div>
      {isCurrentUser && <div className="message-block__subtitle-close" onClick={deletedMessage}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
          <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
        </svg>
      </div>}
    </div>
  );
})

export default Message;