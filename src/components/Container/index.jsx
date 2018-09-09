import React from 'react';
import './style.css';

const Container = ({ children }) => (
  <main className="container">
    {React.Children.map(children, child => (
      <div className="container__element">{child}</div>
    ))}
  </main>
);

export default Container;
