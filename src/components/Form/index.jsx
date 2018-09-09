import PropTypes from 'prop-types';
import React from 'react';
import FormElement from './FormElement';
import './style.css';

const Form = ({ inputs }) => (
  <form action="#" className="form">
    {inputs.filter(input => input.type === 'text-field').map(input => (
      <React.Fragment>
        <FormElement key={input.name} {...input} />
      </React.Fragment>
    ))}
    <div className="form__row">
      {inputs.filter(input => input.type !== 'text-field').map(input => (
        <FormElement key={input.name} {...input} />
      ))}
    </div>
  </form>
);

Form.propTypes = {
  inputs: PropTypes.arrayOf(FormElement.propTypes).isRequired
};

export default Form;
