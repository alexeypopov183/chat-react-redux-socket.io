import React from 'react';
import {useSelector} from "react-redux";

import Header from "../components/Header";
import InputMessage from "../components/InputMessage";
import ListNicknames from "../components/ListNicknames";
import ListMessages from "../components/ListMessages";

const Chat = () => {
  const {user, users} = useSelector(state => state.userReducer);
  const {userName} = user.name;
  const {img} = user;

  return (
    <div className="container">
      <Header img={img} userName={userName}/>
      <main className="main">
        <ListNicknames users={users}/>
        <ListMessages userName={userName} />
      </main>
      <InputMessage img={img} userName={userName}/>
    </div>
  );
};

export default Chat;