module.exports = async function(eleventyConfig) {
	// Dynamic imports for Eleventy v3 compatibility
	const {
	  EleventyRenderPlugin,
	  EleventyI18nPlugin,
	  EleventyHtmlBasePlugin
	} = await import("@11ty/eleventy");
  
	// get package.json
	const packageVersion = require('./package.json').version;
  
	// module import filters
	const {
	  limit,
	  toHtml,
	  where,
	  toISOString,
	  formatDate,
	  toAbsoluteUrl,
	  stripHtml,
	  minifyCss,
	  minifyJs,
	  mdInline,
	  splitlines,
	  excerpt,
	  imgSize
	} = require('./config/filters/index.js');
  
	// module import shortcodes
	const {
	  imageShortcodePlaceholder,
	  includeRaw,
	  liteYoutube
	} = require('./config/shortcodes/index.js');
  
	// module import collections
	const {getAllPosts} = require('./config/collections/index.js');
  
	// module import events
	const {svgToJpeg} = require('./config/events/index.js');
  
	// plugins
	const markdownLib = require('./config/plugins/markdown.js');
	const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
	const {slugifyString} = require('./config/utils');
	const {escape} = require('lodash');
	const pluginRss = require('@11ty/eleventy-plugin-rss');
	const inclusiveLangPlugin = require('@11ty/eleventy-plugin-inclusive-language');
	const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
  
	// --------------------- Custom Watch Targets -----------------------
	eleventyConfig.addWatchTarget('./src/assets');
	eleventyConfig.addWatchTarget('./utils/*.js');
  
	// --------------------- layout aliases -----------------------
	eleventyConfig.addLayoutAlias('base', 'base.njk');
	eleventyConfig.addLayoutAlias('page', 'page.njk');
	eleventyConfig.addLayoutAlias('home', 'home.njk');
	eleventyConfig.addLayoutAlias('blog', 'blog.njk');
	eleventyConfig.addLayoutAlias('post', 'post.njk');
	eleventyConfig.addLayoutAlias('pricing', 'pricing.njk');
	eleventyConfig.addLayoutAlias('contacts', 'contacts.njk');
  
	// --------------------- Custom filters -----------------------
	eleventyConfig.addFilter('limit', limit);
	eleventyConfig.addFilter('where', where);
	eleventyConfig.addFilter('escape', escape);
	eleventyConfig.addFilter('toHtml', toHtml);
	eleventyConfig.addFilter('toIsoString', toISOString);
	eleventyConfig.addFilter('formatDate', formatDate);
	eleventyConfig.addFilter('toAbsoluteUrl', toAbsoluteUrl);
	eleventyConfig.addFilter('stripHtml', stripHtml);
	eleventyConfig.addFilter('slugify', slugifyString);
	eleventyConfig.addFilter('toJson', JSON.stringify);
	eleventyConfig.addFilter('fromJson', JSON.parse);
	eleventyConfig.addFilter('cssmin', minifyCss);
	eleventyConfig.addNunjucksAsyncFilter('jsmin', minifyJs);
	eleventyConfig.addFilter('md', mdInline);
	eleventyConfig.addFilter('splitlines', splitlines);
	eleventyConfig.addFilter('excerpt', excerpt);
	eleventyConfig.addFilter('imgSize', imgSize);
	eleventyConfig.addFilter('keys', Object.keys);
	eleventyConfig.addFilter('values', Object.values);
	eleventyConfig.addFilter('entries', Object.entries);
  
	// --------------------- Custom shortcodes ---------------------
	eleventyConfig.addNunjucksAsyncShortcode('imagePlaceholder', imageShortcodePlaceholder);
	eleventyConfig.addShortcode('youtube', liteYoutube);
	eleventyConfig.addShortcode('include_raw', includeRaw);
	eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`); // current year, stephanie eckles
	eleventyConfig.addShortcode('packageVersion', () => `v${packageVersion}`);
  
	// --------------------- Custom transforms ---------------------
	eleventyConfig.addPlugin(require('./config/transforms/html-config.js'));
  
	// --------------------- Custom Template Languages ---------------------
	eleventyConfig.addPlugin(require('./config/template-languages/css-config.js'));
	eleventyConfig.addPlugin(require('./config/template-languages/js-config.js'));
  
	// --------------------- Custom collections -----------------------
	eleventyConfig.addCollection('posts', getAllPosts);
  
	// --------------------- Events ---------------------
	eleventyConfig.on('afterBuild', svgToJpeg);
  
	// --------------------- Plugins ---------------------
	eleventyConfig.addPlugin(EleventyRenderPlugin);
	eleventyConfig.addPlugin(syntaxHighlight);
	eleventyConfig.setLibrary('md', markdownLib);
	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(inclusiveLangPlugin);
	eleventyConfig.addPlugin(eleventyNavigationPlugin);
  
	// --------------------- Passthrough File Copy -----------------------
	// same path
	['src/assets/fonts/', 'src/assets/images/'].forEach(path =>
	  eleventyConfig.addPassthroughCopy(path)
	);
  
	// social icons to root directory
	eleventyConfig.addPassthroughCopy({
	  'src/assets/images/favicon/*': '/'
	});
  
	eleventyConfig.addPassthroughCopy({
	  'src/assets/css/global.css': 'src/_includes/global.css'
	});
  
	// --------------------- general config -----------------------
	return {
	  markdownTemplateEngine: 'njk',
	  htmlTemplateEngine: 'njk',
	  dataTemplateEngine: 'njk',
  
	  dir: {
		output: 'dist',
		input: 'src',
		includes: '_includes',
		layouts: '_layouts'
	  }
	};
  };