import React from 'react';

import Header from "../components/Header";
import Footer from "../components/Footer";
import ListNicknames from "../components/ListNicknames";
import ListMessages from "../components/ListMessages";

const Chat = ({userName}) => {
  //TODO перенести userName в редакс
  return (
    <div className="container">
      <Header userName={userName}/>
      <main className="main">
        <ListNicknames />
        <ListMessages userName={userName}/>
      </main>
      <Footer userName={userName}/>
    </div>
  );
};

export default Chat;