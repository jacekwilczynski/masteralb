import TextField from 'components/Form/TextField';
import Header from 'components/Header';
import Panel from 'components/Panel';
import React from 'react';
import './style.css';

const FormsShowcase = () => (
  <div>
    <Header />
    <Panel title="Register Form">
      <TextField type="user" name="user" label="Username" />
    </Panel>
  </div>
);

export default FormsShowcase;
