//@ts-check
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const automaticNoopener = require('eleventy-plugin-automatic-noopener');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/img": "img" });
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(automaticNoopener, {
    elements: ['a', 'area', 'form'],
    noopener: true,
    noreferrer: true,
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
