# hdot

A zero-dependency, buildless, terse, and type-safe way to write HTML in JavaScript.

## Usage

```js
  import { h } from 'hdot';

  const html = h.div(
    h.h1`Hello world`,
    h.input.type('button').value`Click me!`
  )

  console.log(html);
  // --> `<div><h1>Hello world</h1><input type="button" value="Click me!"></div>`
```