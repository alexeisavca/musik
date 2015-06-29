var React = require('react');
var PureRenderComponent = require('../pure-render-component');
var cn = require('classnames');
module.exports = Playlist;
class Playlist extends PureRenderComponent {
    setActive (){
        this.props.setCurrentPlaylist(this.props.index);
    }

    getInput (){
        return (
            <input type="text"/>
        )
    }

    getTab (){
        return (
            <a href="javascript:void(0)">
                here be playlist
            </a>
        )
    }

    render() {
        var {editable, active} = this.props;
        return (
            <li className={cn({active: active})} onClick={this.setActive.bind(this)}>
                {editable ? this.getInput() : this.getTab()}
            </li>
        )
    }
}

Playlist.propTypes = {
    index: React.PropTypes.number.isRequired,
    setCurrentPlaylist: React.PropTypes.func.isRequired,
    editable: React.PropTypes.bool
};