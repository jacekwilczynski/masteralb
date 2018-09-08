import TextField from 'components/Form/TextField';
import PropTypes from 'prop-types';
import React from 'react';

const Form = ({ textFields }) => (
  <form action="#" className="form">
    {textFields.map(textField => (
      <TextField key={textField.name} {...textField} />
    ))}
  </form>
);

Form.propTypes = {
  textFields: PropTypes.shape(TextField.PropTypes).isRequired
};

export default Form;
