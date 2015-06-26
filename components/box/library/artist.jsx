var React = require('react');
var Unfoldable = require('./unfolable');
var {List} = require('immutable');
var toTitleCase = require('../../../tools/to-title-case');
var Album = require('./album');
module.exports = Artist;
class Artist extends Unfoldable {
    getAlbums (){
        if(this.state.unfolded){
            return this.props.tracks.groupBy(track => toTitleCase(track.get('album'))).map((tracksByAlbum, album) => (
                <Album key={album} name={album} tracks={tracksByAlbum}/>
            )).toArray()
        }
    }

    onDragStart (e){
        e.dataTransfer.effectAllowed = 'copy';
        e.dataTransfer.setData('text/plain', JSON.stringify(this.props.tracks));
    }

    render() {
        var {name} = this.props;
        return (
            <li
                className="media" onClick={this.toggleFolded.bind(this)} draggable onDragStart={this.onDragStart.bind(this)}>
                <div className="media-left">
                    <a href="javascript:void(0)">
                        <img className="media-object" src="https://placeholdit.imgix.net/~text?txtsize=9&txt=32%C3%9732&w=32&h=32" alt={name}/>
                    </a>
                </div>
                <div className="media-body">
                    <h6 className="media-heading">{name}</h6>
                    {this.getAlbums()}
                </div>
            </li>
        )
    }
}
Artist.propTypes = {
    name: React.PropTypes.string.isRequired,
    tracks: React.PropTypes.instanceOf(List).isRequired
};