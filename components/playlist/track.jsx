var React = require('react');
var {Map} = require('immutable');
var cn = require("classnames");
module.exports = Track;
class Track extends React.Component {
    playTrack (){
        this.props.setCurrentTrack(this.props.track);
    }

    render() {
        var {track, active} = this.props;
        return (
            <tr className={cn({active: active})} onDoubleClick={this.playTrack.bind(this)}>
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
    setCurrentTrack: React.PropTypes.func.isRequired,
    active: React.PropTypes.bool
};
