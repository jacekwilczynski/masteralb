import PropTypes from 'prop-types';
import React from 'react';
import icons from './icons';

const TextField = ({ type, name, label }) => (
  <label className={'text-field text-field--' + type} aria-label={label}>
    <img src={icons[type]} alt="" className="text-field__icon" />
    <input
      type="text"
      name={name}
      placeholder={label}
      className="text-field__input"
    />
  </label>
);

TextField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default TextField;
