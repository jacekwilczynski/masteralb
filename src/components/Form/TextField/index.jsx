import PropTypes from 'prop-types';
import React from 'react';
import icons from './icons';
import './style.css';

const TextField = ({ type, name, label }) => {
  const icon = icons[type];
  return (
    <label className={'text-field text-field--' + type}>
      {icon && (
        <span className="text-field__icon-container">
          <img src={icon} alt="" className="text-field__icon" />
        </span>
      )}
      <input
        type="text"
        name={name}
        placeholder={label}
        aria-label={label}
        className="text-field__input"
      />
    </label>
  );
};

TextField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default TextField;
