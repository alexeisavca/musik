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
            { test: /\.jsx?$/, loaders: ['jsx?harmony'] }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.less']
    }
};