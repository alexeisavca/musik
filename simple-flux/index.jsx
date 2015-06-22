//This is a very simple and primitive Flux implementation and should be not taken seriously
var Actions = require('./actions');
var Store = require('./store');
module.exports = class{
    constructor(_ActionsClass, _StoreClass){
        var ActionsClass = _ActionsClass || Actions;
        var StoreClass = _StoreClass || Store;
        this.store = new StoreClass();
        this.actions = new ActionsClass(this.store.process.bind(this.store));
    }

    setOnStoreUpdateListener(listener){
        this.store.setOnUpdateListener(listener);
    }
};