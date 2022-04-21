import React from 'react';

const Welcome = ({changeOpen}) => {

  const openChat = () => {
    changeOpen(true);
  };

  return (
    <div className="welcome-block">
      <h1 className='welcome__title'>Welcome on chat</h1>
      <button
        onClick={openChat}
        className='welcome__btn'
      >
        Log in
      </button>
    </div>
  );
};

export default Welcome;