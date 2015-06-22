var React = require('react');
var {List} = require('immutable');
module.exports = {
    libraries: React.PropTypes.instanceOf(List),
    currentMainNavigationItem: React.PropTypes.string,
    boxFilter: React.PropTypes.string,
    actions: React.PropTypes.shape({
        setMainNavigation: React.PropTypes.func.isRequired
    }).isRequired
};