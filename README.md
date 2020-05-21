# Tag Builder

![version](https://img.shields.io/npm/v/tag-b?color=green&style=flat-square)
![downloads](https://img.shields.io/npm/dy/tag-b?color=blueviolet&style=flat-square)
![size](https://img.shields.io/bundlephobia/min/tag-b?style=flat-square)
![license](https://img.shields.io/npm/l/tag-b?style=flat-square)

Build your HTML-page using functions those represent a HTML tag.


```
├── tag-b.cjs.min.js (559 bytes)
├── tag-b.esm.min.js (546 bytes)
└── tag-b.umd.min.js (742 bytes)
```

## Getting Started

Consider example of using this library with React.js 

```javascript
import ReactDOM from 'react-dom';
import React from 'react';
import tagB from 'tag-b';

// pass functions that creates a HTML tag
const {div, h1, p, html} = tagB(React.createElement); 

function MyComponent(props) {
  return h1('This is My Component', props);
}

ReactDOM.render(
  div(
    [
      div([
        h1('This is heading', {className: 'my-super-style'}),
        p('This is my paragraph, long-long-long-long-long')
      ]),
      html(MyComponent, '', {className: 'my-component-style', id: 'my-component'}),
    ],
    {className: 'wrapper'}
  ),
  document.querySelector('#root')
);
```

The code above renders:
```html
<div class="wrapper">
  <div>
    <h1 class="my-super-style">This is heading</h1>
    <p>This is my paragraph, long-long-long-long-long</p>
  </div>
  <h1 class="my-component-style" id="my-component">This is My Component</h1>
</div>
```

## Using 

### Build a tag using common function

```javascript
html(tag, content, attributes)
```

### Build a specific tag

```javascript
tag(content, attributes)
```
- here `tag` is a HTML tag name (i.e. `<div>`, `<h1>` and etc.) 

## Supported HTML tags
- `<div>` `<span>` `<article>` `<main>` `<section>` `<header>` `<footer>` `<nav>`
- `<h1>` `<h2>` `<h3>` `<h4>` `<h5>` `<h6>` `<p>` `<a>`
- `<button>` `<form>` `<input>` `<label>` `<textarea>` `<select>` `<option>` `<optgroup>` `<legend>` `<fieldset>` `<progress>` `<datalist>`
- `<ul>` `<ol>` `<li>`
- `<pre>` `<code>`
- `<img>` `<figure>` `<figcaption>` `<audio>` `<video>`
- `<table>` `<tbody>` `<thead>` `<tfoot>` `<tr>` `<th>` `<td>` `<caption>`
- `<hr>` `<br>`

### TODO
- [ ] Support all HTML-tags
- [ ] Improve tags composition
