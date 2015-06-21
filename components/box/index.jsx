var React = require('react');
var __ = require('../../tools/translate');
require('./style');
module.exports = class extends React.Component {
    wrap (children){
        return (
            <div className="col-md-2 col-sm-5 musik-main-navigation-box">
                <form>
                    <input type="text" className="form-control" placeholder={__('Search')}/>
                </form>
                {children}
            </div>
        );
    }
};