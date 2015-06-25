var React = require('react');
var PureRenderComponent = require('../pure-render-component');
var cn = require('classnames');
module.exports = Playlist;
class Playlist extends PureRenderComponent {
    setActive (){
        this.props.setCurrentPlaylist(this.props.index);
    }

    render() {
        return (
            <li className={cn({active: this.props.active})} onClick={this.setActive.bind(this)}>
                <a href="javascript:void(0)">
                    here be playlist
                </a>
            </li>
        )
    }
}
Playlist.propTypes = {
    index: React.PropTypes.number.isRequired,
    setCurrentPlaylist: React.PropTypes.func.isRequired
};