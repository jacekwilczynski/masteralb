import Checkbox from 'components/Form/Checkbox';
import TextField from 'components/Form/TextField';
import PropTypes from 'prop-types';
import React from 'react';

const Form = ({ textFields, checkbox }) => (
  <form action="#" className="form">
    {textFields.map(textField => (
      <TextField key={textField.name} {...textField} />
    ))}
    {checkbox && <Checkbox label={checkbox} />}
  </form>
);

Form.propTypes = {
  textFields: PropTypes.arrayOf(PropTypes.shape(TextField.PropTypes).isRequired)
    .isRequired,
  checkbox: PropTypes.string
};

export default Form;
