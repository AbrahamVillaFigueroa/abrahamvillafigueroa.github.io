const orgPlugin = require("eleventy-plugin-org").default;
const rssPlugin = require("@11ty/eleventy-plugin-rss");
const path = require("path");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(orgPlugin, {
    orgDir: path.join(__dirname, "src/posts"),
    collectionName: "org",
  });

  eleventyConfig.addPlugin(orgPlugin, {
    orgDir: path.join(__dirname, "src/pages"),
    collectionName: "orgPages",
  });

  eleventyConfig.addPlugin(orgPlugin, {
    orgDir: path.join(__dirname, "src/libros"),
    collectionName: "orgLibros",
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

  // Demote every heading one level (h1→h2, h2→h3…) in org content so body
  // headings sit below the page title and nested org headings keep their depth
  eleventyConfig.addFilter("demoteHeadings", (html) => {
    if (typeof html !== "string") return html;
    return html.replace(
      /<(\/?)h([1-5])(\b[^>]*)>/gi,
      (_, slash, level, rest) => `<${slash}h${Number(level) + 1}${rest}>`
    );
  });

  // Format a Date as "D de mes" in Spanish
  eleventyConfig.addFilter("spanishDate", (value) => {
    if (!value) return "";
    const d = value instanceof Date ? value : new Date(value);
    const months = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
    return `${d.getUTCDate()} de ${months[d.getUTCMonth()]} de ${d.getUTCFullYear()}`;
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
