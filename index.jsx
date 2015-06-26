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
                            />
                        </div>
                        <div className="col-md-12">
                            <Player track={this.props.currentTrack}/>
                        </div>
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

var flux = new SimpleFlux();

flux.store.setLibraries(
    List([
        Map({
            label: 'Music',
            icon: 'music',
            slug: 'music',
            tracks: List([
                Map({
                    artist: 'Pepper, New Beat Fund',
                    album: 'Every Little Thing',
                    track: 1,
                    title: 'Every Little Thing',
                    url: 'tracks/Summertime Party Jamz/01 Every Little Thing.mp3'
                }),
                Map({
                    artist: 'New Beat Fund',
                    album: 'Sponge Fingerz',
                    track: 1,
                    title: 'Halloween Birthdaze',
                    url: 'tracks/Summertime Party Jamz/Halloween Birthdaze.mp3'
                }),
                Map({
                    artist: 'New Beat Fund',
                    album: 'Sponge Fingerz',
                    track: 2,
                    title: 'Sunday Funday',
                    url: 'tracks/Summertime Party Jamz/Sunday Funday.mp3'
                })
            ])
        }),
        Map({
            label: 'Audio books',
            icon: 'book',
            slug: 'audiobooks',
            tracks: List([
                Map({
                    artist: 'Mark Twain',
                    album: 'Tom Sawyer',
                    track: 1,
                    title: 'Chapter I && II',
                    url: 'tracks/Tom Sawyer/01-02.mp3'
                }),
                Map({
                    artist: 'Mark Twain',
                    album: 'Tom Sawyer',
                    track: 2,
                    title: 'Chapter III && IV',
                    url: 'tracks/Tom Sawyer/03-04.mp3'
                }),
                Map({
                    artist: 'Mark Twain',
                    album: 'Tom Sawyer',
                    track: 3,
                    title: 'Chapter V && VI',
                    url: 'tracks/Tom Sawyer/05-06.mp3'
                }),
                Map({
                    artist: 'Mark Twain',
                    album: 'Tom Sawyer',
                    track: 4,
                    title: 'Chapter VII && VIII',
                    url: 'tracks/Tom Sawyer/07-08.mp3'
                }),
                Map({
                    artist: 'Mark Twain',
                    album: 'Tom Sawyer',
                    track: 5,
                    title: 'Chapter IX && X',
                    url: 'tracks/Tom Sawyer/09-10.mp3'
                }),
                Map({
                    artist: 'Mark Twain',
                    album: 'Tom Sawyer',
                    track: 6,
                    title: 'Chapter XI && XII',
                    url: 'tracks/Tom Sawyer/11-12.mp3'
                }),
                Map({
                    artist: 'Mark Twain',
                    album: 'Tom Sawyer',
                    track: 7,
                    title: 'Chapter XIII && XIV',
                    url: 'tracks/Tom Sawyer/13-14.mp3'
                }),
                Map({
                    artist: 'Mark Twain',
                    album: 'Tom Sawyer',
                    track: 8,
                    title: 'Chapter XVI && XVII',
                    url: 'tracks/Tom Sawyer/16-17.mp3'
                }),
                Map({
                    artist: 'Mark Twain',
                    album: 'Tom Sawyer',
                    track: 9,
                    title: 'Chapter XVIII && XIX',
                    url: 'tracks/Tom Sawyer/18-19.mp3'
                }),
                Map({
                    artist: 'Mark Twain',
                    album: 'Tom Sawyer',
                    track: 10,
                    title: 'Chapter XXI && XXII',
                    url: 'tracks/Tom Sawyer/21-22.mp3'
                }),
                Map({
                    artist: 'Mark Twain',
                    album: 'Tom Sawyer',
                    track: 11,
                    title: 'Chapter XXIV && XXV',
                    url: 'tracks/Tom Sawyer/24-25.mp3'
                }),
                Map({
                    artist: 'Mark Twain',
                    album: 'Tom Sawyer',
                    track: 12,
                    title: 'Chapter XXVI',
                    url: 'tracks/Tom Sawyer/26.mp3'
                }),
                Map({
                    artist: 'Mark Twain',
                    album: 'Tom Sawyer',
                    track: 13,
                    title: 'Chapter XXVII && XXVIII',
                    url: 'tracks/Tom Sawyer/27-28.mp3'
                }),
                Map({
                    artist: 'Mark Twain',
                    album: 'Tom Sawyer',
                    track: 14,
                    title: 'Chapter XXIX',
                    url: 'tracks/Tom Sawyer/29.mp3'
                }),
                Map({
                    artist: 'Mark Twain',
                    album: 'Tom Sawyer',
                    track: 15,
                    title: 'Chapter XXX',
                    url: 'tracks/Tom Sawyer/30.mp3'
                }),
                Map({
                    artist: 'Mark Twain',
                    album: 'Tom Sawyer',
                    track: 16,
                    title: 'Chapter XXXI && XXXII',
                    url: 'tracks/Tom Sawyer/31-32.mp3'
                }),
                Map({
                    artist: 'Mark Twain',
                    album: 'Tom Sawyer',
                    track: 17,
                    title: 'Chapter XXXIII && XXXIV',
                    url: 'tracks/Tom Sawyer/33-34.mp3'
                })
            ])
        }),
        Map({
            label: 'Audio lessons',
            icon: 'education',
            slug: 'audiolessons',
            tracks: List()
        })
    ])
);

flux.setOnStoreUpdateListener(function(){
    React.render(
        <module.exports
            libraries={flux.store.getLibraries()}
            currentMainNavigationItem={flux.store.getCurrentMainNavigationItem()}
            playlists={flux.store.getPlaylists()}
            currentPlaylist={flux.store.getCurrentPlaylist()}
            actions={flux.actions}
            boxFilter={flux.store.getBoxFilter()}
            />, document.getElementById('the-container')
    );
});
