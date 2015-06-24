var React = require('react');
var PureRenderComponent = require('../pure-render-component');
var {List} = require('immutable');
var Playlist = require('./playlist');
module.exports = PlaylistNavigation;
class PlaylistNavigation extends PureRenderComponent {
    render() {
        return (
            <div className="col-md-12" onDoubleClick={this.props.createPlaylist}>
                <ul className="nav nav-tabs">
                    <li>&nbsp;</li>
                    {this.props.playlists.map((playlist, index) => (
                        <Playlist
                            key={index}
                            index={index}
                            active={index === this.props.currentPlaylist}
                            setCurrentPlaylist={this.props.setCurrentPlaylist}
                        />
                    )).toArray()}
                    <li onClick={this.props.createPlaylist}>
                        <a href="javascript:void(0)">
                            <i className="glyphicon glyphicon-plus"></i>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

PlaylistNavigation.propTypes = {
    playlists: React.PropTypes.instanceOf(List).isRequired,
    createPlaylist: React.PropTypes.func.isRequired,
    setCurrentPlaylist: React.PropTypes.func.isRequired,
    currentPlaylist: React.PropTypes.number
};