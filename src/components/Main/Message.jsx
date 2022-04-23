import React from 'react';
import {useDispatch} from "react-redux";

import {deleteMessage} from "../../redux/actions";

const Message = ({messageProp}) => {
  const {userName, message, uniqId} = messageProp;
  const dispatch = useDispatch();

  const deletedMessage = (id) => {
    dispatch(deleteMessage(id));
  }

  return (
    <div className="message-block">
      {userName}: {message} <span onClick={() => deletedMessage(uniqId)}>x</span>
    </div>
  );
};

export default Message;