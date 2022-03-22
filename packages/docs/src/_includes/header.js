//@ts-check
const { h } = require("hdot");

function render() {
  return h.header(
    h.h1`hdot`, 
    h.p(`A safer way to write HTML in JavaScript and the `, h.a.href('https://jamstack.org/what-is-jamstack/')`Jamstack.`),
    h.a.href('https://github.com/willmartian/hdot')`GitHub`, ' | ', h.a.href('https://www.npmjs.com/package/hdot')`NPM`
  )
}

module.exports = render;