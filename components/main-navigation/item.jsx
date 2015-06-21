var React = require('react');
var cn = require('classnames');
module.exports = MainNavigationItem;
class MainNavigationItem extends React.Component {
    render() {
        return (
            <div className={cn({active: this.props.active})}>
                <i className={`glyphicon glyphicon-${this.props.icon}`}></i>
                <h6>{this.props.label}</h6>
            </div>
        )
    }
}

MainNavigationItem.propTypes = {
    icon: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired
};