const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/main",
        angular2: "./src/angular2.ts",
        polyfills: "./src/polyfills.ts"
    },
    output: {
        path: __dirname + "/",
        filename: "./dist/[name].bundle.js"
    },
    resolve: {
        extensions: [".js", ".ts"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: ["awesome-typescript-loader", "angular2-template-loader"]
            },
            {
                test: /\.html$/,
                loader: "html"
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: "file?name=assets/[name].[hash].[ext]"
            },
            {test: /\.css$/, loader: "style!css"}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "./dist/index.html",
            template: "./src/index.html"
        })
    ]
};