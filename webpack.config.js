/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
// const GoogleFontsPlugin = require("@beyonk/google-fonts-webpack-plugin")
// const webpackFonts = require("./webpack.fonts.json")
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
	...defaultConfig,
	devtool: 'development' === NODE_ENV ? 'eval-source-map' : undefined,
	mode: NODE_ENV,
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
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [ "autoprefixer" ]
							}
						}
					},
					"sass-loader"
				]
			},
		],
	},
	resolve: {
		extensions: [...defaultConfig.resolve.extensions, ".tsx", ".ts" ],
	},
	output: {
		// ...defaultConfig.output,
		filename: "[name].js",
		path: path.resolve(__dirname, "plugin_build"),
		clean: true
	}
};
