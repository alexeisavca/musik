var React = require('react');
var {Map} = require('immutable');
module.exports = Player;
class Player extends React.Component {
    render() {
        var {track} = this.props;
        return (
            <audio src={track && track.get('url')}/>
        )
    }
}
Player.propTypes = {
    track: React.PropTypes.instanceOf(Map)
};