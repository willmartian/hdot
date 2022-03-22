//@ts-check
const { h } = require("hdot");

const render = (data) => h.html(
  h.h1`hdot`, 
  h.p`A better way to write HTML in JavaScript.`
);

module.exports = { render };
