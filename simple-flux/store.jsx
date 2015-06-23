var constants = require('./constants');
var actions = {
    [constants.CURRENT_MAIN_NAVIGATION_ITEM_CHANGED]: 'setCurrentMainNavigationItem',
    [constants.BOX_FILTER_UPDATED]: 'setBoxFilter'
};
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
        ['OnUpdateListener', 'CurrentMainNavigationItem', 'BoxFilter', 'Libraries'].forEach(this.createProperty.bind(this));
        this.setOnUpdateListener(function(){});
        this.setCurrentMainNavigationItem('search');
    }

    process(action, payload){
        if('undefined' != typeof actions[action]){
            this[actions[action]](payload);
        } else {
            console.warn(`No handler for the ${action} action`);
        }
    }
};