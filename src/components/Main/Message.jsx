import React from 'react';
import {useDispatch} from "react-redux";
import {deleteMessage} from "../../redux/actions";

const Message = ({messageProp}) => {
  const {user, message, id} = messageProp;
  const dispatch = useDispatch();

  const deletedMessage = (id) => {
    dispatch(deleteMessage(id));
  }

  return (
    <div className="message-block">
      {user}: {message} <span onClick={() => deletedMessage(id)}>x</span>
    </div>
  );
};

export default Message;