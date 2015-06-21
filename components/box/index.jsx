var React = require('react');
require('./style');
module.exports = class extends React.Component {
    wrap (children){
        return (
            <div className="col-md-2 col-sm-5 musik-main-navigation-box">
                {children}
            </div>
        );
    }
};