/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const DependencyExtractionWebpackPlugin = require( '@wordpress/dependency-extraction-webpack-plugin' );
const GoogleFontsPlugin = require("@beyonk/google-fonts-webpack-plugin")
const webpackFonts = require("./webpack.fonts.json")

module.exports = {
	entry: {
		"index": "./wordpress/index.tsx",
		"logo-maker": "./src/index.tsx"
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js", ".jsx"],
	},
	output: {
		// ...defaultConfig.output,
		filename: "[name].js",
		path: path.resolve(__dirname, "plugin_build"),
		clean: true
	},
	plugins: [
		new DependencyExtractionWebpackPlugin(),
		new BundleAnalyzerPlugin({
			analyzerMode: 'static'
		}),
		new GoogleFontsPlugin({
			fonts: webpackFonts
			/* ...options */
		})
	]
};