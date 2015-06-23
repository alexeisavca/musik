var React = require('react');
module.exports = class extends React.Component {
    shouldComponentUpdate (nextProps){
        return Object.keys(this.props).some(key => this.props[key] != nextProps[key])
    }
};