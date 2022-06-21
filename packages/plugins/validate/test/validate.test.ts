import { test } from "uvu";
import * as assert from "uvu/assert";
import { hdot } from "hdot";
import validate from "../src/validate";

test("basic", () => {
  const h = hdot([validate]);

  assert.throws(() => {
    h.div.id("hello world").toString();
  });

  assert.not.throws(() => {
    h.div.id("helloworld").toString();
  });
});

test.run();
