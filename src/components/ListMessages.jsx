import React, {useEffect, useRef} from 'react';
import {useSelector} from "react-redux";

import Message from "./Message";

const ListMessages = ({userName}) => {
  const messages = useSelector(state => state.messageReducer);
  const messagesEnd = useRef(null);

  const scrollToBottom = () => {
    messagesEnd.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    scrollToBottom();
  }, [messages])

  return (
    <section className="main__messages">
      {messages.map((message) => (
        <Message currentUser={userName} key={message.uniqId} messageProp={message}/>
      ))}
      <div ref={messagesEnd} />
    </section>
  );
};

export default ListMessages;