const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { h, setPlugins } = require('hdot');

setPlugins(h, [
  {
    attribute(tagName, key, args) {
      if (tagName !== 'a' || key !== 'href' || args.includes('://hdot.dev')) {
        return [key, args];
      }
      return [` target="_blank" rel="noopener noreferrer" ` + key, args]
    }
  }
])

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/img": "img" });
  eleventyConfig.addPlugin(pluginSyntaxHighlight);

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
