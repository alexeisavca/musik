var React = require('react');
module.exports = MainNavigationItem;
class MainNavigationItem extends React.Component {
    render() {
        return (
            <button className="list-group-item">
                <i className={`glyphicon glyphicon-${this.props.icon}`}></i>
                &nbsp;
                {this.props.label}
            </button>
        )
    }
}

MainNavigationItem.propTypes = {
    icon: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired
};