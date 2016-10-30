const gulp = require("gulp");
const gutil = require("gulp-util");
const webpack = require("webpack");
const webpackConfigDev = require("./webpack.dev.config.js");
const webpackConfigProd = require("./webpack.prod.config.js");
const WebpackDevServer = require("webpack-dev-server");

gulp.task("default", ["webpack"]);
gulp.task("dev", ["webpack-dev-server"]);

gulp.task("webpack", function (callback) {
    webpack(webpackConfigProd, function (err, stats) {
        if (err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            colors: true
        }));
        callback();
    });
});

gulp.task("webpack-dev-server", function () {
    const myConfig = Object.create(webpackConfigDev);

    const compiler = webpack(myConfig);

    new WebpackDevServer(compiler, {
        stats: {
            colors: true
        },
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    }).listen(8080, "localhost", function (err) {
        if (err) throw new gutil.PluginError("webpack-dev-server", err);
    });
});