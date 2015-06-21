var React = require('react');
var Box = require('./index');
var __ = require('../../tools/translate');
module.exports = class extends Box {
    render () {
        return this.wrap(
            "here be search"
        )
    }
};