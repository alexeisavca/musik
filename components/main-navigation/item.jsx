var React = require('react');
var PureRenderComponent = require('../pure-render-component');
var cn = require('classnames');
module.exports = MainNavigationItem;
class MainNavigationItem extends PureRenderComponent {
    setActive (){ this.props.setMainNavigation(this.props.slug); }

    render() {
        return (
            <div className={cn({active: this.props.active})} onClick={this.setActive.bind(this)}>
                <i className={`glyphicon glyphicon-${this.props.icon}`}></i>
                <h6>{this.props.label}</h6>
            </div>
        )
    }
}

MainNavigationItem.propTypes = {
    icon: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    setMainNavigation: React.PropTypes.func.isRequired
};