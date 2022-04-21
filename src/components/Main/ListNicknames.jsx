import React from 'react';
import {useSelector} from "react-redux";

const ListNicknames = () => {
  const users = useSelector(state => state.userReducer);
  console.log(users)

  return (
    <section className="main__nicknames">
      {users.map(user => (
        <div key={user.id} className="nicknames__block">
          {user.user}
        </div>
      ))}
    </section>
  );
};

export default ListNicknames;