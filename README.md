# hdot

A sensible way to write HTML in JavaScript.

- **Type-safe.** Helps you follow the HTML spec.
- **Terse.** Almost character for character with plain HTML.
- **Buildless.** Runs in the browser, the server, the gym.
- **Tiny.** ~900 bytes (minified and gzipped). No dependencies.
  [Size Limit](https://github.com/ai/size-limit) controls the size.

\* _not affiliated with the Hawaii Department of Transportation_


## [Read the docs](https://hdot.dev/)

```js
import { h } from "hdot"; 

h.div(
  h.h1`hdot`,
  h.p`Type-safe HTML templates`,
  h.a.href("https://hdot.dev")`Read the docs.`
);
```
```html
<div><h1>hdot</h1><p>Type-safe HTML templates</p><a href="https://hdot.dev">Read the docs.</a></div>
```
