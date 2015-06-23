var constants = require('./constants');
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
        switch(action){
            case constants.CURRENT_MAIN_NAVIGATION_ITEM_CHANGED:
                this.setCurrentMainNavigationIItem(payload);
                break;
            case constants.BOX_FILTER_UPDATED:
                this.setBoxFilter(payload);
                break;
        }
    }
};