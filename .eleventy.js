const { DateTime } = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginNavigation = require("@11ty/eleventy-navigation");
const md = require("markdown-it");
const anchor = require("markdown-it-anchor");
const footnote = require("markdown-it-footnote");

function year(dateObj) {
  return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("yyyy");
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(pluginNavigation);

  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
  });
  eleventyConfig.addFilter("readablePodcastDate", dateStr => {
    return DateTime.fromFormat(dateStr.substring(0, 16), 'EEE, dd LLL yyyy').toFormat("dd LLL yyyy");
  });
  eleventyConfig.addFilter("year", year);
  eleventyConfig.addFilter("keys", obj => Object.keys(obj));
  eleventyConfig.addFilter("groupPostsByYear", posts => {
    let res = {};
    posts.forEach(post => {
      let key = year(post.date);
      (res[key] || (res[key] = [])).push(post);
    })
    return res;
  });
  eleventyConfig.addFilter("firstParagraph", post => {
    const paragraphs = post.templateContent.split('\n');
    const imgPara = para => 
      para.replace('<p>', '').replace('</p>', '').startsWith('<img');
    const textParagraphs = paragraphs.filter(para => !imgPara(para));
    return textParagraphs.length ? textParagraphs[0] : "";
  })

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => n < 0 ? array.slice(n) : array.slice(0, n));

  eleventyConfig.addCollection("githubIssues", require("./_11ty/getGitHubIssues"));
  eleventyConfig.addCollection("tagList", require("./_11ty/getTagList"));

  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");

  /* Markdown Overrides */
  let markdownLibrary = md({
    html: true,
    breaks: true,
    linkify: true
  }).use(anchor, {
    permalink: anchor.permalink.linkInsideHeader({
      symbol: `
        <span aria-hidden="true">#</span>
      `,
      placement: 'after'
    })
  }).use(footnote);

  // Footnote styling
  // http://dirtystylus.com/2020/06/15/eleventy-markdown-and-footnotes/
  markdownLibrary.renderer.rules.footnote_caption = (tokens, idx) => {
    let n = Number(tokens[idx].meta.id + 1).toString();
    if (tokens[idx].meta.subId > 0) n += ":" + tokens[idx].meta.subId;
    return n;
  };
  eleventyConfig.setLibrary("md", markdownLibrary);

  return {
    templateFormats: [
      "pug",
      "md",
      "njk",
      "html",
      "liquid"
    ],

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about those.

    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for link URLs (it does not affect your file structure)
    // Best paired with the `url` filter: https://www.11ty.io/docs/filters/url/

    // You can also pass this in on the command line using `--pathprefix`
    // pathPrefix: "/",

    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",

    // These are all optional, defaults are shown:
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
