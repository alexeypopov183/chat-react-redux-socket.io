import React from 'react';

const Welcome = ({changeOpen}) => {

  return (
    <div className="welcome-block">
      <h1 className='welcome__title'>Welcome on chat</h1>
      <button
        onClick={() => changeOpen(true)}
        className='welcome__btn'
      >
        Log in
      </button>
    </div>
  );
};

export default Welcome;