import PropTypes from 'prop-types';
import React from 'react';
import Button from '../Button';
import Checkbox from '../Checkbox';
import TextField from '../TextField';

const components = {
  'text-field': TextField,
  checkbox: Checkbox,
  button: Button
};

const FormGroup = ({ type, subtype, ...data }) => {
  const Component = components[type];
  return (
    <div className="form__group">
      <Component {...data} type={subtype} />
    </div>
  );
};

FormGroup.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
};

export default FormGroup;
