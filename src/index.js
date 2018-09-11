import formUrls from 'forms';
import getHtml from 'getHtml';
import Page from 'pages/FormsShowcase/index';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from 'registerServiceWorker';
import 'style.css';
import { loadMany } from 'utils/loadYaml';

loadMany(formUrls).then(forms => {
  const element = <Page forms={forms} />;
  ReactDOM.render(element, document.getElementById('root'));
  console.log(getHtml(element));
});

registerServiceWorker();
