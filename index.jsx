var React = require('react');
var __ = require('./tools/translate');
var MainNavigation = require("./components/main-navigation");
var Playlist = require('./components/playlist');
var SearchBox = require('./components/box/search');
var AddLibraryBox = require('./components/box/add-library');
var LibraryBox = require('./components/box/library');
var {List, Map} = require('immutable');
var PlaylistNavigation = require('./components/playlist-navigation');
var Player = require('./components/placeholder')('player');
var SimpleFlux = require('./simple-flux');
module.exports = Musik;
class Musik extends React.Component{
    getMainNavigationBox(){
        var {libraries, currentMainNavigationItem, boxFilter} = this.props;
        if(libraries.some(library => library.get('slug') == currentMainNavigationItem)){
            return (
                <LibraryBox
                    filter={boxFilter}
                    library={libraries.find(library => library.get('slug') == currentMainNavigationItem)}
                />
            );
        } else if('add-library' == currentMainNavigationItem){
            return <AddLibraryBox/>;
        } else {
            return <SearchBox filter={boxFilter}/>
        }
    }

    render(){
        return (
            <div className="row">
                <MainNavigation
                    libraries={this.props.libraries}
                    currentItem={this.props.currentMainNavigationItem}
                    actions={this.props.actions}
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
Musik.propTypes = require('./prop-types');