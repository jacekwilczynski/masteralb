import Container from 'components/Container';
import Footer from 'components/Footer';
import Form from 'components/Form';
import Header from 'components/Header';
import Panel from 'components/Panel';
import PropTypes from 'prop-types';
import React from 'react';
import './formsShowcase/formsShowcase.css';

const FormsShowcase = ({ forms }) => (
  <React.Fragment>
    <Header />
    <Container>
      {forms.map(({ name, title, ...rest }) => (
        <Panel key={name} title={title}>
          <Form {...rest} />
        </Panel>
      ))}
      <Footer />
    </Container>
  </React.Fragment>
);

FormsShowcase.propTypes = {
  forms: PropTypes.arrayOf(PropTypes.shape(Form.PropTypes)).isRequired
};

export default FormsShowcase;
