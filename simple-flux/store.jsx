var constants = require('./constants');
module.exports = class Store {
    constructor(){
        var onUpdateListener = function(){};
        this.setOnUpdateListener = function(listener){
            onUpdateListener = listener;
            listener();
        };

        var currentMainNavigationItem = "search";
        this.getCurrentMainNavigationItem = () => currentMainNavigationItem;
        this.setCurrentMainNavigationIItem = function(newVal){
            currentMainNavigationItem = newVal;
            onUpdateListener();
        };

        var boxFilter;
        this.getBoxFilter = () => boxFilter;
        this.setBoxFilter = function(newVal){
            console.log('set box filter to ' + newVal);
            boxFilter = newVal;
            onUpdateListener();
        }
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