var React = require('react');
var __ = require('../../tools/translate');
var obj2arr = require('../../tools/obj2arr');
var PureRenderComponent = require('../pure-render-component');
require('./style');
module.exports = Box;
class Box extends PureRenderComponent {
    wrap (children){
        return (
            <div className="col-md-2 col-sm-5 musik-main-navigation-box">
                {children}
            </div>
        );
    }
}