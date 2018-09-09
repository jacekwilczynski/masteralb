import PropTypes from 'prop-types';
import React from 'react';
import './checkbox/checkbox.css';

const Checkbox = ({ label }) => (
  <label className="checkbox">
    <span className="checkbox__container">
      <input className="checkbox__input" type="checkbox" />
      <span className="checkbox__box">
        <span className="checkbox__mark" />
      </span>
    </span>
    <span className="checkbox__label">{label}</span>
  </label>
);

Checkbox.propTypes = {
  label: PropTypes.string.isRequired
};

export default Checkbox;
