//@ts-check
const { h } = require("hdot");
const header = require("../header");
const footer = require("../footer");

function render(data) {
  return '<!doctype html>' + h.html(
    h.head(
      h.meta.charset("utf-8"),
      h.meta["http-equiv"]("x-ua-compatible"),
      h.meta.name('viewport').content('width=device-width, initial-scale=1.0'),
      h.title`hdot — write safer HTML`,
      h.meta.name("description").content('A type-safe HTML template engine for JavaScript and the Jamstack.'),
      h.link.rel('stylesheet').href(this.url('/css/index.css')),
      h.link.rel('stylesheet').href('https://unpkg.com/prismjs@1.20.0/themes/prism-okaidia.css')
    ),
    header(),
    h.body(data.content),
    footer()
  );
}

module.exports = { render };
