import React from 'react';

const Message = ({messageProp}) => {
  const {user, message, id} = messageProp;
  return (
    <div className="message-block">
      {user}: {message}
    </div>
  );
};

export default Message;