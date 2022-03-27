import { test } from "uvu";
import * as assert from "uvu/assert";
import { h } from 'hdot';
import { register } from '../src/compenent';

const MyComponent = (el) => {
  return h.div(
    h.h1`Hello world!`,
    h.p`Wooo`
  )
}
register('my-component', MyComponent)

test("basic", () => {
  
});
