const path = require('path');
module.exports = {
	entry: {
		'/public/dist/assets/js/main': './assets-src/js/main.js',
		'/public/dist/assets/js/slider': './assets-src/js/slider.js',
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			}
		]
	},
	resolve: {
		extensions: ['*', '.js']
	},
	mode: 'none',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '.')
	},
	optimization: {
		minimize: false
	}
};