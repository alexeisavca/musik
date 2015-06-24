var React = require('react');
var {List} = require('immutable');
var PureRenderComponent = require('../../pure-render-component');
var Artist = require('./artist');
var toTitleCase = require('../../../tools/to-title-case');
module.exports = Letter;
class Letter extends PureRenderComponent {
    render() {
        var {letter, tracks} = this.props;
        return (
            <section>
                <h4 className="page-header">{letter}</h4>
                <ul className="media-list">
                    {tracks.groupBy(track => toTitleCase(track.get('artist'))).map((tracksByArtist, artist) => (
                        <Artist key={artist} name={artist} tracks={tracksByArtist}/>
                    )).toArray()}
                </ul>
            </section>
        )
    }
}
Letter.propTypes = {
    letter: React.PropTypes.string.isRequired,
    tracks: React.PropTypes.instanceOf(List).isRequired
};