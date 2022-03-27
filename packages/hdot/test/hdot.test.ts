import { test } from "uvu";
import * as assert from "uvu/assert";
import { h } from "../src/hdot";

test("basic", () => {
  assert.equal(h.div(), "<div></div>");
  assert.equal(h.h1(), "<h1></h1>");
  assert.equal(h.p.toString(), "<p></p>");
});

test("children", () => {
  assert.equal(h.div("hdot"), "<div>hdot</div>");
  assert.equal(h.div`hdot`, "<div>hdot</div>");
  assert.equal(h.div(h.div()), "<div><div></div></div>");
  assert.equal(h.div(h.div("hdot")), "<div><div>hdot</div></div>");
  assert.equal(h.div(h.div("hdot"), "hdot"), "<div><div>hdot</div>hdot</div>");
  assert.equal(
    h.div(h.div, h.div(), h.div.toString(), h.div().toString(), h.div``),
    "<div><div></div><div></div><div></div><div></div><div></div></div>"
  );
  assert.equal(
    h.div`Hello ${h.span`world!`}`,
    "<div>Hello <span>world!</span></div>"
  );
  assert.equal(
    h.div(`Hello ${h.span`world!`}`),
    "<div>Hello <span>world!</span></div>"
  );
  assert.equal(h.div(`Hello ${h.span}`), "<div>Hello <span></span></div>");
});

test("attributes", () => {
  assert.equal(h.div.id("hdot")(), '<div id="hdot"></div>');
  assert.equal(h.h1.id("hdot").toString(), '<h1 id="hdot"></h1>');
  assert.equal(
    h.h1.id("hdot1").class("hdot2").toString(),
    '<h1 id="hdot1" class="hdot2"></h1>'
  );
  assert.equal(h.details.open(true)(), "<details open></details>");
  assert.equal(
    h.details.open(true).class("hdot")(),
    '<details open class="hdot"></details>'
  );
});

test.run();
