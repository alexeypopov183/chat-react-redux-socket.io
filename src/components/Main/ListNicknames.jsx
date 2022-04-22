import React from 'react';
import {useSelector} from "react-redux";

const ListNicknames = () => {
  const users = useSelector(state => state.userReducer.user);

  return (
    <section className="main__nicknames">
      <span className="main__nicknames-count">Онлайн: {users.length}</span>
      {users && users.map((user, i) => (
        <div key={user + i} className="main__nicknames-block">
          {user}
        </div>
      ))}
    </section>
  );
};

export default ListNicknames;