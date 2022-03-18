# "Attribute Validation"

Automatically type check HTML attributes against the HTML spec, powered by [markuplint](https://github.com/markuplint/markuplint).

## Installation
```bash
npm i @hdot/plugins/validate
```

## Usage

```js
import validate from "@hdot/plugins/validate";
import { h, setPlugins } from "hdot";

setPlugins(h, [validate]);

h.div.id('my id')();
// ---> Error: 'my id' is not a valid DOMID.

```

## Disabling in Production

If you running hdot in the browser, this plugin should typically not be used in production. Doing so will increase your bundle size. 

If your build environment supports `NODE_ENV`, you might do the following:

```js
import { h, setPlugins } from "hdot";
const plugins = [];

if (process.env.NODE_ENV === 'development') {
  const { default: validate } = await import('@hdot/plugins/validate');
  plugins.push(validate);
}

setPlugins(h, plugins);
```