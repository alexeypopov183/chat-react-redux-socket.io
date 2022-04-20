import React, {useEffect, useState} from 'react';
import getRandomName from "../functions/getRandomName";

const Welcome = ({changeOpen}) => {
  const [userName, setUserName] = useState('');

  const openChat = () => {
    changeOpen(true);
    console.log(userName)
  };

  useEffect(() => {
    setUserName(getRandomName());
  }, []);

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