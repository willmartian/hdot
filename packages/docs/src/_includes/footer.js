//@ts-check
const { h } = require("hdot");

function render() {
  return h.footer(
    h.p('Created by ', h.a.href("https://willmartian.com")`will martian`, ' 👽'),
    h.p('This site is built with ', h.a.href('https://11ty.dev')`Eleventy`, ' and hdot.')
  )
}

module.exports = render;