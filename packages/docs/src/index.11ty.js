const { h } = require('hdot');

const data = {
  items: [
    'Possums',
    'are',
    'cute'
  ]
}

const myList = (items) => h.ul(
	items.map(
  	item => h.li(item)
	)
);

const render = ({ items }) => h.html(
  h.h1`Hello Eleventy!`,
  myList(items)
)

module.exports = { data, render };