import PropTypes from 'prop-types';
import React from 'react';
import icons from './icons';
import './style.css';

const TextField = ({ type, name, label, dropdown }) => {
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
        className={
          'text-field__input' + (dropdown ? ' text-field__input--dropdown' : '')
        }
      />
      {dropdown && <span className="text-field__caret" />}
    </label>
  );
};

TextField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  dropdown: PropTypes.bool
};

export default TextField;
