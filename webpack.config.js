var path = require('path');
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
    resolve: {
        extensions: ['', '.js', '.jsx', '.less']
    }
};