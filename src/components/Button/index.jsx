import PropTypes from 'prop-types';
import React from 'react';
import './style.css';

const Button = ({ type, disabled, label, smallerText }) => (
  <button
    type="button"
    className={
      'button button--' + type + (smallerText ? ' button--smaller-text' : '')
    }
    disabled={disabled}
  >
    {label}
  </button>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  smallerText: PropTypes.bool,
  disabled: PropTypes.bool
};

export default Button;
