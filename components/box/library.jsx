var React = require('react');
var Box = require('./index');
var __ = require('../../tools/translate');
module.exports = class extends Box {
    render () {
        return this.wrap(
            this.props.library.get('tracks').map(track => track.get('title'))
        )
    }
};