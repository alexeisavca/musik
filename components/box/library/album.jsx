var React = require('react');
var Unfoldable = require('./unfolable');
var Track = require('./track');
var {List} = require('immutable');
module.exports = Album;
class Album extends Unfoldable {
    getTracks (){
        if(this.state.unfolded){
            return this.props.tracks.map(track => (
                <Track key={track.get('track')} name={track.get('title')} track={track}/>
            )).toArray()
        }
    }

    onDragStart (e){
        e.stopPropagation();
        e.dataTransfer.effectAllowed = 'copy';
        e.dataTransfer.setData('text/plain', JSON.stringify(this.props.tracks));
    }

    render() {
        var {name} = this.props;
        return (
            <div className="media" onClick={this.toggleFolded.bind(this)} draggable onDragStart={this.onDragStart.bind(this)}>
                <div className="media-left">
                    <a href="javascript:void(0)">
                        <img className="media-object" src="https://placeholdit.imgix.net/~text?txtsize=9&txt=32%C3%9732&w=32&h=32" alt={name}/>
                    </a>
                </div>
                <div className="media-body">
                    <h6 className="media-heading">{name}</h6>
                    {this.getTracks()}
                </div>
            </div>
        )
    }
}
Album.propTypes = {
    name: React.PropTypes.string.isRequired,
    tracks: React.PropTypes.instanceOf(List).isRequired
};