import { safeLoad } from 'js-yaml';

export const loadOne = url =>
  fetch(url)
    .then(res => res.text())
    .then(safeLoad);

export const loadMany = urls => Promise.all(urls.map(loadOne));
