// Transforms
const htmlMinTransform = require('./src/transforms/html-min-transform.js');

// Create a helpful production flag
const isProduction = process.env.NODE_ENV === 'production';

module.exports = config => {

      // Only minify HTML if we are in production because it slows builds _right_ down
  if (isProduction) {
    config.addTransform('htmlmin', htmlMinTransform);
  }

    config.addWatchTarget("./src/assets/styles/");

    // Passthrough copy
    // Set directories to pass through to the dist folder
    config.addPassthroughCopy('./src/assets/images/');
    config.addPassthroughCopy('./src/assets/fonts/');
    config.addPassthroughCopy('./src/assets/svg/');

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