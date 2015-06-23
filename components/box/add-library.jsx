var React = require('react');
var Box = require('./index');
module.exports = AddLibraryBox;
class AddLibraryBox extends Box {
    render() {
        return this.wrap(
            <form action="">
                Name: <input type="text"/>
            </form>
        )
    }
}