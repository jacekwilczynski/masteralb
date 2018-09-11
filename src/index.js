import formUrls from 'data/forms';
import getHtml from 'getHtml';
import Page from 'pages/FormsShowcase';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from 'registerServiceWorker';
import 'style.css';
import { loadMany } from 'utils/loadYaml';

loadMany(formUrls).then(forms => {
  const element = <Page forms={forms} />;
  ReactDOM.render(element, document.getElementById('root'));
  fetch('/', { method: 'POST', body: getHtml(element) });
});

registerServiceWorker();
