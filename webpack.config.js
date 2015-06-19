var path = require('path');
module.exports = {
    entry: {
        main: "./entry.jsx"
    },
    output: {
        path: './',
        filename: "index.js",
        libraryTarget: 'commonjs2'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['jsx?harmony'] }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.less']
    }
};