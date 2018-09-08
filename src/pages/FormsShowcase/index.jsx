import Form from 'components/Form';
import Header from 'components/Header';
import Panel from 'components/Panel';
import PropTypes from 'prop-types';
import React from 'react';
import './style.css';

const FormsShowcase = ({ forms }) => (
  <div>
    <Header />
    {forms.map(({ title, ...rest }) => (
      <Panel title={title}>
        <Form {...rest} />
      </Panel>
    ))}
  </div>
);

FormsShowcase.propTypes = {
  forms: PropTypes.shape(Form.PropTypes).isRequired
};

export default FormsShowcase;
