import PropTypes from 'prop-types';
import React from 'react';
import FormGroup from './FormGroup';
import './style.css';

const Form = ({ inputs }) => (
  <form action="#" className="form">
    {inputs.map(input => (
      <React.Fragment>
        <FormGroup key={input.name} {...input} />
      </React.Fragment>
    ))}
  </form>
);

Form.propTypes = {
  inputs: PropTypes.arrayOf(FormGroup.propTypes).isRequired
};

export default Form;
