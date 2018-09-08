import PropTypes from 'prop-types';
import React from 'react';
import FormGroup from './FormGroup';

const Form = ({ inputs }) => (
  <form action="#" className="form">
    {inputs.map(input => (
      <FormGroup key={input.name} {...input} />
    ))}
  </form>
);

Form.propTypes = {
  inputs: PropTypes.arrayOf(FormGroup.propTypes).isRequired
};

export default Form;
