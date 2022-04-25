import React from 'react';

import Header from "../components/Header";
import Footer from "../components/Footer";
import ListNicknames from "../components/ListNicknames";
import ListMessages from "../components/ListMessages";
import {useSelector} from "react-redux";

const Chat = () => {
  const {user, users} = useSelector(state => state.userReducer);
  const {userName} = user;

  return (
    <div className="container">
      <Header userName={userName}/>
      <main className="main">
        <ListNicknames users={users}/>
        <ListMessages userName={userName}/>
      </main>
      <Footer userName={userName}/>
    </div>
  );
};

export default Chat;