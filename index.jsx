var React = require('react');
var __ = require('./tools/translate');
var MainNavigation = require("./components/main-navigation");
var Playlist = require('./components/playlist');
var AddLibraryBox = require('./components/box/add-library');
var LibraryBox = require('./components/box/library');
var {List, Map} = require('immutable');
var PlaylistNavigation = require('./components/playlist-navigation');
var Player = require('./components/player');
var SimpleFlux = require('./simple-flux');
module.exports = Musik;
class Musik extends React.Component{
    getMainNavigationBox(){
        var {libraries, currentMainNavigationItem, boxFilter, actions} = this.props;
        if(libraries.some(library => library.get('slug') == currentMainNavigationItem)){
            return (
                <LibraryBox
                    filter={boxFilter}
                    setBoxFilter={actions.setBoxFilter.bind(actions)}
                    tracks={libraries.find(library => library.get('slug') == currentMainNavigationItem).get('tracks')}
                />
            );
        } else if('add-library' == currentMainNavigationItem){
            return <AddLibraryBox/>;
        } else {
            return (
                <LibraryBox
                    filter={boxFilter}
                    setBoxFilter={actions.setBoxFilter.bind(actions)}
                    tracks={libraries.flatMap(library => library.get('tracks'))}
                />
            )
        }
    }

    render(){
        return (
            <div className="row">
                <MainNavigation
                    libraries={this.props.libraries}
                    currentItem={this.props.currentMainNavigationItem}
                    setMainNavigation={this.props.actions.setMainNavigation.bind(this.props.actions)}
                />
                {this.getMainNavigationBox()}
                <div className="col-md-9 col-sm-6">
                    <div className="row">
                        <PlaylistNavigation
                            playlists={this.props.playlists}
                            currentPlaylist={this.props.currentPlaylist}
                            createPlaylist={this.props.actions.createPlaylist.bind(this.props.actions)}
                            setCurrentPlaylist={this.props.actions.setCurrentPlaylist.bind(this.props.actions)}
                        />
                        <div className="col-md-12">
                            <Playlist
                                tracks={this.props.playlists.getIn([this.props.currentPlaylist, 'tracks'])}
                                updatePlaylistTracks={this.props.actions.updatePlaylistTracks.bind(this.props.actions, this.props.currentPlaylist)}
                                setCurrentTrack={this.props.actions.setCurrentTrack.bind(this.props.actions)}
                                currentTrack={this.props.currentTrack}
                            />
                        </div>
                        <Player
                            track={this.props.currentTrack}
                            setCurrentTrack={this.props.actions.setCurrentTrack.bind(this.props.actions)}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
Musik.propTypes = {
    libraries: React.PropTypes.instanceOf(List).isRequired,
    currentMainNavigationItem: React.PropTypes.string,
    playlists: React.PropTypes.instanceOf(List).isRequired,
    currentPlaylist: React.PropTypes.number.isRequired,
    boxFilter: React.PropTypes.string,
    actions: React.PropTypes.shape({
        setMainNavigation: React.PropTypes.func.isRequired,
        setBoxFilter: React.PropTypes.func.isRequired,
        createPlaylist: React.PropTypes.func.isRequired,
        setCurrentPlaylist: React.PropTypes.func.isRequired,
        updatePlaylistTracks: React.PropTypes.func.isRequired
    }).isRequired,
    currentTrack: React.PropTypes.instanceOf(Map)
};