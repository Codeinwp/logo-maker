/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path")
const defaultConfig = require("@wordpress/scripts/config/webpack.config")

module.exports = {
    devtool: "inline-source-map",
    ...defaultConfig,
    entry: {
        index: "./wordpress/index.tsx",
        "logo-maker": "./src/index.tsx",
    },
    module: {
        ...defaultConfig.module,
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            ...defaultConfig.module.rules,
        ],
    },

    resolve: {
        ...defaultConfig.resolve,
        extensions: [".tsx", ".ts", ".js", ".jsx"],
        alias: {
            react: "preact/compat",
            "react-dom/test-utils": "preact/test-utils",
            "react-dom": "preact/compat",
            // Must be below test-utils
        },
    },

    output: {
        // ...defaultConfig.output,
        filename: "[name].js",
        path: path.resolve(__dirname, "plugin_build"),
    },
}
