var React = require('react');
var {Map} = require('immutable');
module.exports = Track;
class Track extends React.Component {
    playTrack (){
        this.props.setCurrentTrack(this.props.track);
    }

    render() {
        var {track} = this.props;
        return (
            <tr onDoubleClick={this.playTrack.bind(this)}>
                <th scope="row">{track.get('track')}</th>
                <td>{track.get('title')}</td>
                <td>{track.get('artist')}</td>
                <td>{track.get('album')}</td>
            </tr>
        )
    }
}
Track.propTypes = {
    track: React.PropTypes.instanceOf(Map).isRequired,
    setCurrentTrack: React.PropTypes.func.isRequired
};
