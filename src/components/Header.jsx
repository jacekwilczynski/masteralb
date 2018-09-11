import React from 'react';
import logo from './logo.png';
import './style.css';

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
