var React = require('react');
var Box = require('./index');
module.exports = class extends Box {
    getFilterForm (){ return null }

    render() {
        return this.wrap(
            <form action="">
                Name: <input type="text"/>
            </form>
        )
    }
};