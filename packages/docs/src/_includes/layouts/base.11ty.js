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
      
      // Open Graph
      h.meta["property"]("og:type").content("website"),
      h.meta["property"]("og:url").content("https://hdot.dev"),
      h.meta["property"]("og:site_name").content("hdot"),
      h.meta["property"]("og:locale").content("en_US"),
      h.meta["property"]("og:title").content(data.meta.subtitle),
      h.meta["property"]("og:description").content(data.meta.description),
      h.meta["property"]("og:image").content(data.meta.image),
      h.meta["property"]("og:image:width").content("1232"),
      h.meta["property"]("og:image:height").content("700"),
      h.meta["property"]("og:image:alt").content(data.meta["image:alt"]),
      
      // Twitter
      h.meta["property"]("twitter:card").content("summary_large_image"),
      // h.meta["property"]("twitter:site").content(""),
      h.meta["property"]("twitter:creator").content(data.meta.author.twitter_username),
      h.meta["property"]("twitter:url").content("https://hdot.dev"),
      h.meta["property"]("twitter:title").content(data.meta.subtitle),
      h.meta["property"]("twitter:description").content(data.meta.description),
      h.meta["property"]("twitter:image").content(data.meta.image),
      h.meta["property"]("twitter:image:alt").content(data.meta["image:alt"]),
      
      // Stylesheets
      h.link.rel('stylesheet').href(this.url('/css/index.css')),
      h.link.rel('stylesheet').href('https://unpkg.com/prismjs@1.20.0/themes/prism-okaidia.css')
    ),
    header(),
    h.body(data.content),
    footer()
  );
}

module.exports = { render };
