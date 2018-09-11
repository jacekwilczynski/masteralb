import React from 'react';
import logo from './logo.png';
import './style.css';

const Footer = () => (
  <footer className="footer">
    <img
      src={logo}
      alt="Masteralb logo"
      className="footer__logo"
      data-src="bottom-logo.png"
    />
  </footer>
);

export default Footer;
