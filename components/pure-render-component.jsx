var React = require('react');
var shallowDiff = (a,b) => Object.keys(a).some(key => a[key] != b[key]);
module.exports = class extends React.Component {
    shouldComponentUpdate (nextProps, nextState){
        return shallowDiff(this.props, nextProps) || shallowDiff(this.state, nextState);
    }
};