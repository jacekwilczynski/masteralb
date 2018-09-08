import PropTypes from 'prop-types';
import React from 'react';
import './style.css';

const Button = ({ type, disabled, label }) => (
  <button type="none" className={'button button--' + type} disabled={disabled}>
    {label}
  </button>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired
};

export default Button;
