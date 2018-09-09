import PropTypes from 'prop-types';
import React from 'react';
import './style.css';

const Input = ({ name, label, type, dropdown }) => {
  const InputTag = type === 'multiline' ? 'textarea' : 'input';
  return (
    <InputTag
      type="text"
      name={name}
      placeholder={label}
      aria-label={label}
      className={
        'text-field__input' +
        (type === 'multiline' ? ' text-field--multiline' : '') +
        (dropdown ? ' text-field__input--dropdown' : '')
      }
      rows={type === 'multiline' ? 9 : null}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  dropdown: PropTypes.bool
};

export default Input;
