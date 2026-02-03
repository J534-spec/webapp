import React from 'react';
import { APP_CONFIG } from '../../constants';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">{APP_CONFIG.APP_NAME}</h1>
      <p className="header__subtitle">{APP_CONFIG.APP_DESCRIPTION}</p>
    </header>
  );
};

export default Header;

