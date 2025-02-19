// webpack.config.js

const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'bundle.js',
	},
};