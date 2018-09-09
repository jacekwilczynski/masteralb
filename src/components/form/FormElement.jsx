import Button from 'components/Button';
import Checkbox from 'components/Checkbox';
import TextField from 'components/TextField';
import PropTypes from 'prop-types';
import React from 'react';
import './formElement/formElement.css';

const components = {
  'text-field': TextField,
  checkbox: Checkbox,
  button: Button
};

const FormElement = ({ type, subtype, ...data }) => {
  const Component = components[type];
  return (
    <div
      className={
        'form__element' +
        (type === 'text-field' ? ' form__element--full-width' : '')
      }
    >
      <Component {...data} type={subtype} />
    </div>
  );
};

FormElement.propTypes = {
  type: PropTypes.string.isRequired
};

export default FormElement;
