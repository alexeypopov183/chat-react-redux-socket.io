import React from 'react';
import {useSelector} from "react-redux";

import Message from "./Message";

const ListMessages = ({userName}) => {
  const messages = useSelector(state => state.messageReducer);
  return (
    <section className="main__messages">
      {messages.map((message) => (
        <Message currentUser={userName} key={message.uniqId} messageProp={message}/>
      ))}
    </section>
  );
};

export default ListMessages;