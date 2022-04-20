import React from 'react';
import ListNicknames from "./ListNicknames";
import ListMessages from "./ListMessages";

const Main = () => {
  return (
    <main className="main">
      <ListNicknames />
      <ListMessages />
    </main>
  );
};

export default Main;