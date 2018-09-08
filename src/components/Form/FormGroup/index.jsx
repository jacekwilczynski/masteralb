import PropTypes from 'prop-types';
import React from 'react';
import Button from '../Button';
import Checkbox from '../Checkbox';
import TextField from '../TextField';

const components = {
  textField: TextField,
  checkbox: Checkbox,
  button: Button
};

const FormGroup = ({ type, data }) => {
  const Component = components[type];
  return (
    <div className="form__group">
      <Component {...data} />
    </div>
  );
};

FormGroup.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
};

export default FormGroup;
