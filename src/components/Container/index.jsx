import React from 'react';
import './style.css';

const Container = ({ children }) => (
  <div className="container">
    {React.Children.map(children, child => (
      <div className="container__element">{child}</div>
    ))}
  </div>
);

export default Container;
