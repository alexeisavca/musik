var constants = require('./constants');
module.exports = class Actions{
    constructor(dispatchCb){
        this.dispatch = dispatchCb;
    }

    setMainNavigation(slug){
        this.dispatch(constants.CURRENT_MAIN_NAVIGATION_ITEM_CHANGED, slug);
    }
};