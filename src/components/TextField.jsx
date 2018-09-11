import PropTypes from 'prop-types';
import React from 'react';
import caret from './textField/caret-down.svg';
import icons, { fileNames } from './textField/icons';
import './textField/textField.css';
import TextFieldInput from './textField/TextFieldInput';

const TextField = props => {
  const { type, dropdown } = props;
  const icon = icons[type];
  return (
    <label className={'text-field text-field--' + type}>
      {icon && (
        <span className="text-field__icon-container">
          <img
            src={icon}
            alt=""
            className="text-field__icon"
            data-src={fileNames[type]}
          />
        </span>
      )}
      <Input {...props} />
      {dropdown && <img src={caret} alt="" className="text-field__caret" />}
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
