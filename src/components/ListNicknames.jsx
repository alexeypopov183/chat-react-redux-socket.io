import React from 'react';

const ListNicknames = ({users}) => {
  return (
    <section className="main__nicknames">
      <span className="main__nicknames-count">Онлайн: {users.length}</span>
      {users.map(({name}) => (
        <div key={name} className="main__nicknames-block">
          {name}
        </div>
      ))}
    </section>
  );
};

export default ListNicknames;