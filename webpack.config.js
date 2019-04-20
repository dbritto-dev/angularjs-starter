const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (_, { mode = 'development' }) => ({
	entry: {
		app: './src/index.js',
	},

	devServer: {
		contentBase: './dist',
		compress: true,
		port: 3000,
		historyApiFallback: true,
		disableHostCheck: true,
	},

	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'Development',
			template: './src/index.pug',
		}),
	],

	output: {
		filename: '[name].[hash].bundle.js',
		chunkFilename: '[name].[contenthash].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.pug$/,
				include: /(index)\.pug$/,
				use: 'pug-loader',
			},
			{
				test: /\.pug$/,
				exclude: /(index|404)\.pug$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name]-[hash].html',
						},
					},
					'extract-loader',
					'html-loader',
					'pug-html-loader',
				],
			},
		],
	},

	resolve: {
		modules: ['node_modules'],
		extensions: ['.js', '.scss', '.pug'],
		alias: {
			'@app': path.resolve(__dirname, 'src/app'),
			'@components': path.resolve(__dirname, 'src/components'),
		},
	},

	optimization: {
		splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
				},
			},
		},
	},
});
