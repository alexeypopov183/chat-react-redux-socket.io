import React from 'react';

import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

const Chat = ({userName}) => {

  return (
    <div className="container">
      <Header userName={userName}/>
      <Main />
      <Footer userName={userName}/>
    </div>
  );
};

export default Chat;