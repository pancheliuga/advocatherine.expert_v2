module.exports = config => {
    config.addWatchTarget("./src/assets/styles/");
    // eleventyConfig.addPassthroughCopy("./src/css/");
    // eleventyConfig.addPassthroughCopy("./src/images/");

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: 'dist'
        }
        };
};