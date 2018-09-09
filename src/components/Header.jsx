import React from 'react';
import logo from './header/top-logo.png';
import './header/header.css';

const Header = () => (
  <header className="header">
    <img
      src={logo}
      alt="Masteralb logo"
      className="header__logo"
      data-src="top-logo.png"
    />
  </header>
);

export default Header;
