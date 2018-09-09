import PropTypes from 'prop-types';
import React from 'react';
import './style.css';

const Panel = ({ children, title }) => (
  <section className="panel">
    <h2 className="panel__title">{title}</h2>
    <div className="panel__shadow">
      <div className="panel__body">{children}</div>
    </div>
  </section>
);

Panel.propTypes = {
  title: PropTypes.string.isRequired
};

export default Panel;
