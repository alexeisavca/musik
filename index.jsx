var React = require('react');
var __ = require('./tools/translate');
var MainNavigation = require("./components/main-navigation");
var Playlist = require('./components/playlist');
var AddLibraryBox = require('./components/box/add-library');
var LibraryBox = require('./components/box/library');
var {List, Map} = require('immutable');
var PlaylistNavigation = require('./components/playlist-navigation');
var Player = require('./components/placeholder')('player');
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
                        <PlaylistNavigation/>
                        <div className="col-md-12">
                            <Playlist/>
                        </div>
                        <div className="col-md-12">
                            <Player/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
Musik.propTypes = {
    libraries: React.PropTypes.instanceOf(List),
    currentMainNavigationItem: React.PropTypes.string,
    boxFilter: React.PropTypes.string,
    actions: React.PropTypes.shape({
        setMainNavigation: React.PropTypes.func.isRequired
    }).isRequired
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
                    title: 'Halloween Birthdaze',
                    url: 'tracks/Summertime Party Jamz/Halloween Birthdaze.mp3'
                }),
                Map({
                    artist: 'New Beat Fund',
                    album: 'Sponge Fingerz',
                    title: 'Sunday Funday',
                    url: 'tracks/Summertime Party Jamz/Sunday Funday.mp3'
                })
            ])
        }),
        Map({
            label: 'Audio books',
            icon: 'book',
            slug: 'audiobooks',
            tracks: List()
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
            actions={flux.actions}
            boxFilter={flux.store.getBoxFilter()}
        />, document.getElementById('the-container')
    );
});
