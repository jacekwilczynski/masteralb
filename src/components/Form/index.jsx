import PropTypes from 'prop-types';
import React from 'react';
import FormGroup from './FormGroup';
import './style.css';

const Form = ({ inputs }) => (
  <form action="#" className="form">
    {inputs.filter(input => input.type === 'text-field').map(input => (
      <React.Fragment>
        <FormGroup key={input.name} {...input} />
      </React.Fragment>
    ))}
    <div className="form__row">
      {inputs.filter(input => input.type !== 'text-field').map(input => (
        <FormGroup key={input.name} {...input} />
      ))}
    </div>
  </form>
);

Form.propTypes = {
  inputs: PropTypes.arrayOf(FormGroup.propTypes).isRequired
};

export default Form;
