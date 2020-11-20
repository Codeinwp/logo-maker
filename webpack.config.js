const path = require("path");
const defaultConfig = require("@wordpress/scripts/config/webpack.config");

module.exports = {
	...defaultConfig,
	entry: "./wordpress/index.tsx",
	module: {
		...defaultConfig.module,
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			},
			...defaultConfig.module.rules,
		],
	},

	resolve: {
		...defaultConfig.resolve,
		extensions: [".tsx", ".ts", "js", "jsx"],
	},

	output: {
		// ...defaultConfig.output,
		filename: "index.js",
		path: path.resolve(__dirname, "plugin_build"),
	},
};