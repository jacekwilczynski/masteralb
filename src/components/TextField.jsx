import PropTypes from 'prop-types';
import React from 'react';
import icons from './textField/icons';
import TextFieldInput from './textField/TextFieldInput';
import './textField/textField.css';

const TextField = props => {
  const { type, dropdown } = props;
  const icon = icons[type];
  return (
    <label className={'text-field text-field--' + type}>
      {icon && (
        <span className="text-field__icon-container">
          <img src={icon} alt="" className="text-field__icon" />
        </span>
      )}
      <TextFieldInput {...props} />
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
