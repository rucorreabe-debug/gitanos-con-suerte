module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("imágenes");

  eleventyConfig.addCollection("sorteos", collection => {
    return collection.getFilteredByGlob("content/sorteos/*.md");
  });

  eleventyConfig.addCollection("eventos", collection => {
    return collection.getFilteredByGlob("content/eventos/*.md");
  });

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
