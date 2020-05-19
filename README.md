# Tag Builder

![version](https://img.shields.io/npm/v/tag-b?color=green&style=flat-square)
![downloads](https://img.shields.io/npm/dy/tag-b?color=blueviolet&style=flat-square)

Build your HTML-page using functions those represent a HTML tag.

> Works with React only (library-agnostic Work in Progress)

## Getting Started

```javascript
// your other imports ...
import {html, div, h1, p} from 'tag-b';

ReactDOM.render(
  div(
    [
      div([
        h1('This is heading', {className: 'my-super-style'}),
        p('This is my paragraph, long-long-long-long-long')
      ]),
      html(YourReactComponent, '', {prop1: 'value1', prop2: someValues}),
    ],
    {className: 'wrapper'}
  ),
  document.querySelector('#root')
);
```

## Function structure 

### Build a tag using common function

```javascript
html(tag, content, attributes)
```

### Build a tag

```javascript
tag(content, attributes)
```

## Supported HTML tags
- `<div>` `<span>` `<article>` `<main>` `<section>` `<header>` `<footer>` `<nav>`
- `<h1>` `<h2>` `<h3>` `<h4>` `<h5>` `<h6>` `<p>` `<a>`
- `<button>` `<form>` `<input>` `<label>` `<textarea>` `<select>` `<option>` `<optgroup>` `<legend>` `<fieldset>` `<progress>` `<datalist>`
- `<ul>` `<ol>` `<li>`
- `<pre>` `<code>`
- `<img>` `<figure>` `<figcaption>` `<audio>` `<video>`
- `<table>` `<tbody>` `<thead>` `<tfoot>` `<tr>` `<th>` `<td>` `<caption>`
- `<hr>` `<br>`
