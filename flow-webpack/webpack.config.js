var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        app: "./src/main"
    },
    output: {
        path: __dirname + "/",
        filename: "./dist/[name].bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'stage-1']
                }
            },
            {test: /\.css$/, loader: "style!css"}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename:"./dist/index.html",
            template: "./src/index.html",
        })
        ]
}