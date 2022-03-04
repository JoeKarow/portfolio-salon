const eleventyNaviationPlugin = require("@11ty/eleventy-navigation");
const yaml = require("js-yaml");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");



module.exports = function(eleventyConfig) {
  // eleventyConfig.addPlugin(eleventyNaviationPlugin);
  // eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.setUseGitIgnore(true);
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));
  eleventyConfig.addWatchTarget('./src/css/tailwind.css');
  eleventyConfig.addPassthroughCopy('./src/img');
  eleventyConfig.addPassthroughCopy('./src/js');
  eleventyConfig.addWatchTarget('.src/js/main.js');
  return {
    dir: {
      input: 'src',
      output: 'public'
    },
    htmlTemplateEngine: "njk",
  }
}