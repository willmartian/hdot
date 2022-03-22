# hdot (WIP!)

A sensible way to write HTML in JavaScript.

- **Type-safe.** Helps you follow the HTML spec.
- **Terse.** Almost character for character with plain HTML.
- **Buildless.** Runs in the browser, the server, the gym.
- **Tiny.** 791 bytes (minified and gzipped). No dependencies.
  [Size Limit](https://github.com/ai/size-limit) controls the size.

\* _not affiliated with the Hawaii Department of Transportation_

[**Read the docs.**](https://hdotjs.netlify.app/)

## Example

```js
import { h } from "hdot";

h.div(
  h.h1`Hello world`, 
  h.input.type("button").value("Click me!")
);
```
```html
<div><h1>Hello world</h1><input type="button" value="Click me!"></div>
```
