import PropTypes from 'prop-types';
import React from 'react';
import FormElement from './FormElement';
import './style.css';

const split = condition => array => {
  const matches = [];
  const rest = [];
  for (let item of array) {
    const destination = condition(item) ? matches : rest;
    destination.push(item);
  }
  return [matches, rest];
};

const Form = ({ inputs }) => {
  const [textFields, others] = split(input => input.type === 'text-field')(
    inputs
  );
  return (
    <form action="#" className="form">
      {textFields.map(input => (
        <React.Fragment>
          <FormElement key={input.name} {...input} />
        </React.Fragment>
      ))}
      <div className="form__row">
        {others.map(input => (
          <FormElement key={input.name} {...input} />
        ))}
      </div>
    </form>
  );
};

Form.propTypes = {
  inputs: PropTypes.arrayOf(PropTypes.shape(FormElement.propTypes)).isRequired
};

export default Form;
