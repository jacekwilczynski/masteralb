import { renderToStaticMarkup } from 'react-dom/server';

const inlinedImageData = /src="data:image[^"]*"\s?/g;
const dataSrcAttributes = /data-src="([^"]*)"/g;

const getHtml = element =>
  renderToStaticMarkup(element)
    .replace(inlinedImageData, '')
    .replace(dataSrcAttributes, 'src="images/$1"')
    .replace(/\/>/g, '>')
    .replace(/>/g, '>\n');

export default getHtml;
