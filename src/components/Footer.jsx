import React from 'react';
import logo from './footer/bottom-logo.png';
import './footer/footer.css';

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
