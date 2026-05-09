const orgPlugin = require("eleventy-plugin-org").default;
const rssPlugin = require("@11ty/eleventy-plugin-rss");
const path = require("path");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(orgPlugin, {
    orgDir: path.join(__dirname, "src/posts"),
    collectionName: "org",
  });

  eleventyConfig.addPlugin(rssPlugin);

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/docs");
  eleventyConfig.addPassthroughCopy("src/icons");

  // Return the first N items of an array
  eleventyConfig.addFilter("head", (arr, n) =>
    Array.isArray(arr) ? arr.slice(0, n) : []
  );

  // Strip a leading slash from a string
  eleventyConfig.addFilter("stripLeadingSlash", (str) =>
    typeof str === "string" ? str.replace(/^\//, "") : str
  );

  // Rename "Footnotes:" heading to Spanish
  eleventyConfig.addFilter("localizeFootnotes", (html) => {
    if (typeof html !== "string") return html;
    return html.replace(/<h2>Footnotes:<\/h2>/g, "<h2>Notas al pie</h2>");
  });

  // Fix footnote hrefs: the org plugin uses the slug (/slug#fn.N) but the
  // actual page lives at /weblog/slug/, so links 404. Rewrite them to just #fn.N.
  eleventyConfig.addFilter("fixFootnoteLinks", (html) => {
    if (typeof html !== "string") return html;
    return html
      .replace(/href="[^"]*#(fn\.[^"]+)"/g, 'href="#$1"')
      .replace(/href="[^"]*#(fnr\.[^"]+)"/g, 'href="#$1"');
  });

  // Demote h1→h2 in org post content so body headings sit below the post title
  eleventyConfig.addFilter("demoteHeadings", (html) => {
    if (typeof html !== "string") return html;
    return html.replace(/<(\/?)h1(\b[^>]*)>/gi, "<$1h2$2>");
  });

  // Format a Date or ISO string as YYYY-MM-DD
  eleventyConfig.addFilter("isoDate", (value) => {
    if (!value) return "";
    const d = value instanceof Date ? value : new Date(value);
    return d.toISOString().slice(0, 10);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
  };
};
