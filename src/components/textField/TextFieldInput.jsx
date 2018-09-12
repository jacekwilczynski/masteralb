import PropTypes from 'prop-types';
import React from 'react';
import './textFieldInput/textFieldInput.css';

const inputTypes = {
  email: 'email',
  phone: 'tel'
};

const TextFieldInput = ({ name, label, type, dropdown }) => {
  const multiline = type === 'multiline';
  const InputTag = multiline ? 'textarea' : 'input';
  const inputType = inputTypes[type] || 'text';
  return (
    <InputTag
      type={inputType}
      name={name}
      placeholder={label}
      aria-label={label}
      className={
        'text-field__input' + (dropdown ? ' text-field__input--dropdown' : '')
      }
      rows={multiline ? 9 : null}
    />
  );
};

TextFieldInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  dropdown: PropTypes.bool
};

export default TextFieldInput;
