import { test } from "uvu";
import * as assert from "uvu/assert";
import { h } from "../src/hdot";

test("basic", () => {
  assert.equal(h.div.toString(), "<div></div>");
  assert.equal(h.div().toString(), "<div></div>");
  assert.equal(h.h1().toString(), "<h1></h1>");
  assert.equal(h.p.toString(), "<p></p>");
});

test("children", () => {
  assert.equal(h.div("hdot").toString(), "<div>hdot</div>");
  assert.equal(h.div`hdot`.toString(), "<div>hdot</div>");
  assert.equal(h.div(h.div()).toString(), "<div><div></div></div>");
  assert.equal(h.div(h.div("hdot")).toString(), "<div><div>hdot</div></div>");
  assert.equal(
    h.div(h.div("hdot"), "hdot").toString(),
    "<div><div>hdot</div>hdot</div>"
  );
  assert.equal(
    h
      .div(h.div, h.div(), h.div.toString(), h.div().toString(), h.div``)
      .toString(),
    "<div><div></div><div></div><div></div><div></div><div></div></div>"
  );
  assert.equal(
    h.div`Hello ${h.span`world!`}`.toString(),
    "<div>Hello <span>world!</span></div>"
  );
  assert.equal(
    h.div(`Hello ${h.span`world!`}`).toString(),
    "<div>Hello <span>world!</span></div>"
  );
  assert.equal(
    h.div(`Hello ${h.span}`).toString(),
    "<div>Hello <span></span></div>"
  );
});

test("attributes", () => {
  assert.equal(h.div.id("hdot")().toString(), '<div id="hdot"></div>');
  assert.equal(h.h1.id("hdot").toString(), '<h1 id="hdot"></h1>');
  assert.equal(
    h.h1.id("hdot1").class("hdot2").toString(),
    '<h1 id="hdot1" class="hdot2"></h1>'
  );
  assert.equal(h.details.open(true)().toString(), "<details open></details>");
  assert.equal(
    h.details.open(true).class("hdot")().toString(),
    '<details open class="hdot"></details>'
  );
});

test("data attributes", () => {
  assert.equal(
    h.div.dataName("test123")().toString(),
    `<div data-name="test123"></div>`
  );
});

test("aria attributes", () => {
  assert.equal(
    h.div.ariaLabel("test123")().toString(),
    `<div aria-label="test123"></div>`
  );
  assert.equal(
    h.div.ariaLabel("test123").ariaChecked("false")().toString(),
    `<div aria-label="test123" aria-checked="false"></div>`
  );
});

test.run();
