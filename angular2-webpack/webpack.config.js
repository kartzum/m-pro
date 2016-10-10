module.exports = {
    entry: {
        app: "./src/main",
        vendor: "./src/vendor",
    },
    output: {
        path: __dirname + "/",
        filename: "./dist/[name].bundle.js"
    },
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.jsx']
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            },
            {test: /\.css$/, loader: "style!css"}
        ]
    }
}