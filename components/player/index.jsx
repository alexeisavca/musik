var React = require('react');
var {Map} = require('immutable');
var PureRenderComponent = require('../pure-render-component');
var Seekbar = require('../placeholder')("seek bar");
var Equalizer = require('../placeholder')("equalizer");
module.exports = Player;
class Player extends PureRenderComponent {
    getTheAudioTag (){
        return this.refs.theTag.getDOMNode();
    }

    componentDidMount (){
        this.getTheAudioTag().play();
    }

    stop (){
        this.props.setCurrentTrack(null);
    }

    render() {
        var {track} = this.props;
        return (
            <div className="col-md-12">
                <audio src={track && track.get('url')} style={{display: 'none'}} ref="theTag"/>
                <div className="col-sm-5 col-md-3">
                    <div className="col-sm-3">
                        <button className="btn btn-block btn-default">
                            <i className="glyphicon glyphicon-backward"></i>
                        </button>
                    </div>
                    <div className="col-sm-3">
                        <button className="btn btn-block btn-default">
                            <i className="glyphicon glyphicon-play"></i>
                        </button>
                    </div>
                    <div className="col-sm-3">
                        <button className="btn btn-block btn-default" onClick={this.stop.bind(this)}>
                            <i className="glyphicon glyphicon-stop"></i>
                        </button>
                    </div>
                    <div className="col-sm-3">
                        <button className="btn btn-block btn-default">
                            <i className="glyphicon glyphicon-forward"></i>
                        </button>
                    </div>
                </div>
                <div className="col-md-9 col-sm-7">
                    <Equalizer/>
                </div>
                <div className="col-md-12">
                    <Seekbar/>
                </div>
            </div>
        )
    }
}
Player.propTypes = {
    track: React.PropTypes.instanceOf(Map),
    setCurrentTrack: React.PropTypes.func.isRequired
};