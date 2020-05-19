import React from 'react';

let tagB = (fn => {
  let tags = [
    'div', 'span',
    'article', 'main', 'section', 'header', 'footer', 'nav',
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a',
    'button', 'form', 'input', 'label', 'textarea', 'select', 'option', 'optgroup',
    'legend', 'fieldset', 'progress', 'datalist',
    'ul', 'ol', 'li',
    'pre', 'code',
    'img', 'figure', 'figcaption', 'audio', 'video',
    'table', 'tbody', 'thead', 'tfoot', 'tr', 'th', 'td', 'caption',
    'hr', 'br'
  ];

  let html = (tag, content = '', attrs = {}) => fn(tag, attrs, content);

  return tags.reduce(
    (fns, tag) => {
      fns[tag] = (content, attrs = {}) => html(tag, content, attrs);
      return fns;
    },
    {html: html}
  );
})(React.createElement);

export default tagB;
