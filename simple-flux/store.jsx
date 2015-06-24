var constants = require('./constants');
var actions = {
    [constants.CURRENT_MAIN_NAVIGATION_ITEM_CHANGED]: 'setCurrentMainNavigationItem',
    [constants.BOX_FILTER_UPDATED]: 'setBoxFilter'
};
var {List} = require('immutable');
module.exports = class Store {
    createProperty (capitalizedName){
        var value;
        this['get' + capitalizedName] = () => value;
        this['set' + capitalizedName] = function(newVal){
            value = newVal;
            this.getOnUpdateListener()();
        }
    }

    constructor(){
        ['OnUpdateListener', 'CurrentMainNavigationItem', 'BoxFilter', 'Libraries', 'Playlists'].forEach(this.createProperty.bind(this));
        this.setOnUpdateListener(function(){});
        this.setCurrentMainNavigationItem('search');
        this.setLibraries(List());
        this.setPlaylists(List());
    }

    process(action, payload){
        if('undefined' != typeof actions[action]){
            this[actions[action]](payload);
        } else {
            console.warn(`No handler for the ${action} action`);
        }
    }
};