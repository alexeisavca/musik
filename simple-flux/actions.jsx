var constants = require('./constants');
var {List, Map} = require('immutable');
module.exports = class Actions{
    constructor(dispatchCb){
        this.dispatch = dispatchCb;
    }

    setMainNavigation(slug){
        this.dispatch(constants.CURRENT_MAIN_NAVIGATION_ITEM_CHANGED, slug);
    }

    setBoxFilter(str){
        this.dispatch(constants.BOX_FILTER_UPDATED, str);
    }

    createPlaylist(){
        this.dispatch(constants.PLAYLIST_CREATED, Map({
            tracks: List()
        }));
    }

    setCurrentPlaylist(index){
        this.dispatch(constants.CURRENT_PLAYLIST_CHANGED, index);
    }

    updatePlaylistTracks(index, tracks) {
        this.dispatch(constants.PLAYLIST_TRACKS_UPDATED, {
            index: index,
            tracks: tracks
        });
    }
};