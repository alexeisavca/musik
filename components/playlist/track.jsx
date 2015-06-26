var React = require('react');
var {Map} = require('immutable');
module.exports = Track;
class Track extends React.Component {
    render() {
        var {track} = this.props;
        return (
            <tr>
                <th scope="row">{track.get('track')}</th>
                <td>{track.get('title')}</td>
                <td>{track.get('artist')}</td>
                <td>{track.get('album')}</td>
            </tr>
        )
    }
}
Track.propTypes = {
    track: React.PropTypes.instanceOf(Map).isRequired
};
