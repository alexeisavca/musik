var path = require('path');
var webpack = require("webpack");
module.exports = {
    entry: {
        main: "./index.jsx"
    },
    output: {
        path: './',
        filename: "index.js"
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['jsx?harmony'] },
            { test: /\.less$/, loader: "style!css!less?strictMath&noIeCompat" }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.less']
    }
};