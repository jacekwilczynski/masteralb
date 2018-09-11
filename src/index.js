import formUrls from 'forms';
import Page from 'pages/FormsShowcase/index';
import React from 'react';
import ReactDOM from 'react-dom';
import { renderToStaticMarkup } from 'react-dom/server';
import registerServiceWorker from 'registerServiceWorker';
import 'style.css';
import { loadMany } from 'utils/loadYaml';

loadMany(formUrls).then(forms => {
  const element = <Page forms={forms} />;
  ReactDOM.render(element, document.getElementById('root'));
  console.log(
    renderToStaticMarkup(element)
      .replace(/data:image[^"]*"/g, '"')
      .replace(/>/g, '>\n')
  );
});

registerServiceWorker();
