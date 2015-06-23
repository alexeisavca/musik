var React = require('react');
var __ = require('../../tools/translate');
var obj2arr = require('../../tools/obj2arr');
require('./style');
module.exports = Box;
class Box extends React.Component {
    wrap (){
        return (
            <div className="col-md-2 col-sm-5 musik-main-navigation-box">
                {obj2arr(arguments)}
            </div>
        );
    }
}