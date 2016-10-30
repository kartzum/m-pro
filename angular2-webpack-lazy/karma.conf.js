const webpackConfig = require("./webpack.test.config.js");

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ["jasmine"],

        files: [
            {pattern: "./karma-test-shim.js", watched: false}
        ],

        preprocessors: {
            "./karma-test-shim.js": ["webpack", "sourcemap"]
        },

        webpack: webpackConfig,

        reporters: ["progress"],
        port: 9875,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ["PhantomJS"],
        singleRun: true,
        concurrency: Infinity
    })
};