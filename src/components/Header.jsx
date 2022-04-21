import React from 'react';

const Header = ({userName}) => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="" alt="img"/>
      </div>
      <div className="header__title">
        <span>{userName}</span>
      </div>
    </header>
  );
};

export default Header;