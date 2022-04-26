import React from 'react';

const Header = ({userName, img}) => {
  return (
    <header className="header">
      <img className="header__icon" src={img} alt="img"/>
      <div className="header__title">
        <span>{userName}</span>
      </div>
    </header>
  );
};

export default Header;