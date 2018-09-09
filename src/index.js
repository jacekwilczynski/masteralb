import formUrls from 'forms';
import Page from 'pages/FormsShowcase/index';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from 'registerServiceWorker';
import 'style.css';
import { loadMany } from 'utils/loadYaml';

loadMany(formUrls).then(forms => {
  const root = document.getElementById('root');
  const method = root.hasChildNodes() ? 'hydrate' : 'render';
  ReactDOM[method](<Page forms={forms} />, root);
});

registerServiceWorker();
