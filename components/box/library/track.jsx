var React = require('react');
var PureRenderComponent = require('../../pure-render-component');
var {Map} = require('immutable');
module.exports = Track;
class Track extends PureRenderComponent {
    onDragStart (e){
        e.stopPropagation();
        e.dataTransfer.effectAllowed = 'copy';
        e.dataTransfer.setData('text/plain', JSON.stringify([this.props.track]));
    }

    render() {
        var {name} = this.props;
        return (
            <div className="media" draggable onDragStart={this.onDragStart.bind(this)}>
                <div className="media-left">
                    <a href="javascript:void(0)">
                        <img className="media-object" src="https://placeholdit.imgix.net/~text?txtsize=9&txt=32%C3%9732&w=32&h=32" alt={name}/>
                    </a>
                </div>
                <div className="media-body">
                    <h6 className="media-heading">{name}</h6>
                </div>
            </div>
        )
    }
}
Track.propTypes = {
    name: React.PropTypes.string.isRequired,
    track: React.PropTypes.instanceOf(Map).isRequired
};