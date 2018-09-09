/* Prevent Chrome from putting a column break in the middle of a panel.
* Applied conditionally because it breaks the layout in at least one Firefox version. */
if ('chrome' in window) {
  const styleTag = document.createElement('style');
  styleTag.innerHTML = `
.container__element {
  page-break-inside: avoid;
}
`;
  document.head.appendChild(styleTag);
}
