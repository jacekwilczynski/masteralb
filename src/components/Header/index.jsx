import React from 'react';
import logo from './logo.png';
import './style.css';

const Header = () => (
  <header className="header">
    <img src={logo} alt="Masteralb logo" className="header__logo"/>
  </header>
);

export default Header;
