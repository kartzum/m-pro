var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
var WebpackDevServer = require("webpack-dev-server");

gulp.task("default", ["webpack", "copy-resources"]);
gulp.task("dev", ["copy-resources", "webpack-dev-server"]);

gulp.task("webpack", function(callback) {
    webpack(webpackConfig, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            colors: true
        }));
        callback();
    });
});

gulp.task("copy-resources", function () {
    return gulp
        .src("./src/index.html")
        .pipe(gulp.dest("./dist"));
});

gulp.task("webpack-dev-server", function(callback) {
    var myConfig = Object.create(webpackConfig);

    var compiler = webpack(myConfig);

    new WebpackDevServer(compiler, {
        stats: {
            colors: true
        }
    }).listen(8080, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
    });
});