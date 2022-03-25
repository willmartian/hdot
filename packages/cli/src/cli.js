import posthtml from 'posthtml';

const example = `
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ title }}{% if page.url != '/' %} | {{ meta.siteName }}{% endif %}</title>
  <link rel="stylesheet" href="{{ '/css/style.css' | url }}">
  {% if usePrism %}
    <link href="https://unpkg.com/prismjs@1.20.0/themes/prism-okaidia.css" rel="stylesheet">
  {% endif %}

  <!-- Open graph -->
  <meta property="og:title" content="{{ title }}">
  <meta property="og:description" content="{{ blurb or desc or title }}">
  <meta property="og:type" content="article">
  <meta property="og:image" content="https://willmartian.com/files/martianLogo.png"/>
  <meta property="og:image:width" content="954" />
  <meta property="og:image:height" content="474" />
  <!-- Twitter -->
  <meta name="twitter:title" content="{{ title }}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="{{ twitter }}">
  <meta name="twitter:description" content="{{ blurb or desc or title }}">
  <meta name="twitter:image" content="https://willmartian.com/files/martianLogo.png">
  <meta name="twitter:creator" content="{{ twitter }}">
</head>
<body>
  <div class="inner-container">
    {{ content | safe }}

    {% include "footer.njk" %}
  </div>
</body>
</html>
`;

const indent = (depth = 0, value = '  ') => {
  return value.repeat(depth);
}

const hdotTransformer = (/** @type {posthtml.Node} */tree, depth = 0) => {
  const content = [];

  // Filter out Nodes that only contain whitespace.
  const newTree = tree.filter(node => !(node.tag === undefined && !node.replace(/\s/g, '').length));
  
  // If the original HTML has multiple root elements, wrap in a fragment.
  if (depth === 0 && newTree.length > 1) {
    content.push(`h.fragment(`);
    content.push(hdotTransformer(newTree, 1));
    content.push(`);`);
    return content.join('\n');
  }

  newTree.forEach((node, idx) => {
    // If the node is text content
    if (node.tag === undefined) {
        let text = node.trim();
        text = text.startsWith('<!--') && text.endsWith('-->') ? `//${text.slice(4, -3)}` : `"${text}",`;
        content.push(indent(depth) + text);
    } else { // If the node is an HTML element
      let el = [];

      /** @todo handle special characters in tag name */
      el.push(`${indent(depth)}h.${node.tag}`);
      for (const attrKey in node.attrs) {
        let value = node.attrs[attrKey];
        // TODO: Can the posthtml AST differentiate between attribute value types?
        value = typeof value === 'string' ? `"${value}"` : value;
        el.push(`.${attrKey}(${value})`)
      }

      // Start children block.
      el.push('(\n')
      if (node.content) {
        el.push(hdotTransformer(node.content, depth + 1).slice(0, -1))
      }
      el.push(`\n${indent(depth)})${(depth === 0 && idx === newTree.length - 1) ? ';' : ','}`)
      content.push(el.join(''));
    }
  });
  return content.join('\n');
}

const result = posthtml()
  .use(hdotTransformer)
  .process(example, { sync: true })
  .html

console.log(result);