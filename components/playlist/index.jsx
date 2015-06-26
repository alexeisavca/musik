var React = require('react');
var PureRenderComponent = require('../pure-render-component');
var __ = require('../../tools/translate');
var Immutable = require('immutable');
var {List} = Immutable;
var Track = require('./track');
module.exports = Playlist;
class Playlist extends PureRenderComponent {
    onDragOver (e){
        e.preventDefault();
    }

    onDrop (e){
        e.preventDefault();
        this.props.updatePlaylistTracks(Immutable.fromJS(JSON.parse(e.dataTransfer.getData('text'))));
    }

    render () {
        return (
            <table className="table" onDrop={this.onDrop.bind(this)} onDragOver={this.onDragOver.bind(this)}>
                <thead>
                    <tr>
                        <th>{__('Track')}</th>
                        <th>{__('Title')}</th>
                        <th>{__('Artist')}</th>
                        <th>{__('Album')}</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.tracks.map((track, index) => (
                        <Track key={index} track={track} setCurrentTrack={this.props.setCurrentTrack}/>
                    ))}
                </tbody>
            </table>
        )
    }
}
Playlist.propTypes = {
    tracks: React.PropTypes.instanceOf(List).isRequired,
    updatePlaylistTracks: React.PropTypes.func.isRequired,
    setCurrentTrack: React.PropTypes.func.isRequired
};