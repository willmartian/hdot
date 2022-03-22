const { h } = require("hdot");

const render = ({ content }) =>
h.html(
  h.head(
    h.meta.charset("utf-8"),
    h.meta["http-equiv"]("x-ua-compatible"),
    h.meta.name('viewport').content('width=device-width, initial-scale=1.0'),
    h.title`Document`
  ),
  h.body(content)
);

module.exports = { render };
