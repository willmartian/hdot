//@ts-check
const { h } = require("hdot");

const data = {
  layout: 'layouts/base'
}

function kitchenSink() {
  return [h.code(this.highlight('js',
`h.div.lang('en').class('fun').hidden(true)\`Hello world!\``)),
    h.code(this.highlight('html',`<div lang="en" class="fun" true>Hello world!</div>`)),
    h.div.lang('en').class('fun').hidden(true)`Hello world!`
  ];
}

function render(_data) {
  return h.main(
    h.section(
      h.h2`Introduction`,
      h.p(h.i`hdot`, ` is a type-safe and tiny (~900 bytes) HTML templating language for JavaScript that helps devs write spec compliant and minified HTML.`),
      ...kitchenSink.bind(this)(),
      h.h3`In-editor HTML Documentation`,
      h.p(`HTML can be complicated; when writing it, it is typical to have docs open in another window.`), 
      h.p(`Under the hood, hdot uses content from `, h.a.href('https://developer.mozilla.org/en-US/docs/Web/HTML')`MDN Web Docs`, ` and `, h.a.href('https://markuplint.dev/')`markuplint`, ` to automatically create its TypeScript definitions. If you use a IDE that supports type hints, you will see descriptions of elements and attributes when you are authoring them. Your editor will also error if you pass invalid values to attributes, or disallowed children to certain elements.`),
      h.p`Since this functionality is built into the type definition of hdot rather than the runtime, the library can stay small and fast.`
    ),
    h.section(
      h.h2`Installation`,
      h.p`Hdot can be used in the browser, Node, or a serverless function.`,
      h.code(this.highlight('shell', `npm i hdot`))
    ),
    h.section(
      h.h2`Basic Usage`,
      h.section(
        h.h3`Elements`,
        h.p`All elements are accessed by calling their tag name on h as an function.`,
        h.code(this.highlight('js', `h.h1()`)),
        h.code(this.highlight('html', '<h1></h1>'))
      ),
      h.section(
        h.h3`Attributes`,
        h.p`Attributes are set by chaining methods to elements.`,
        h.code(this.highlight('js', `h.nav.id("abc")()`)),
        h.code(this.highlight('html', '<nav id="abc"></nav>')),
        h.p`Data attributes are referenced with camelCase.`,
        h.code(this.highlight('js', `h.span.dataTest(true)()`)),
        h.code(this.highlight('html', '<span data-test></span>'))
      ),
      h.section(
        h.h3`Children`,
        h.p`Children are added by nesting calls to hdot.`,
        h.code(this.highlight('js', 
`h.div(
  h.p("Hello world!")
)`
        )),
        h.code(this.highlight('html', '<div><p>Hello world!</p></div>')),
        h.p`Text content can passed as either a string or template literal:`,
        h.code(this.highlight('js', `h.div("Hello world!") === h.div\`Hello world!\``)),
        h.code(this.highlight('html', '<div>Hello world!</div>'))
      )
    ),
    h.section(
      h.h2`Adding Logic`,
      h.p`Similar to JSX, logic can be added to templates with vanilla JavaScript expressions.`,
      h.section(
        h.h3`Conditionals`,
        h.code(this.highlight('js', `h.div(1 + 1 === 3 ? "Correct" : "Try again")`)),
        h.code(this.highlight('html', '<div>Try again</div>'))
      ),
      h.section(
        h.h3`Iteration`,
        h.code(this.highlight('js', 
`h.ul(
  [1,2,3].map(
    item => h.li(item)
  )
)`
        )),
        h.code(this.highlight('html', '<ul><li>1</li><li>2</li><li>3</li></ul>'))
      ),
      h.section(
        h.h3`Imports`,
        h.code(this.highlight('js', 
`import header from 'header.js';
const footer = h.footer\`My awesome footer\`;

h.body(
  header,
  h.main\`Hello world!\`,
  footer
)`
        ))
      )
    )
  );
}

module.exports = { data, render };
