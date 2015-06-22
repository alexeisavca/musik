var React = require('react');
var __ = require('../../tools/translate');
var {Map} = require('immutable');
require('./style');
module.exports = Box;
class Box extends React.Component {
    wrap (children){
        return (
            <div className="col-md-2 col-sm-5 musik-main-navigation-box">
                <form>
                    <input
                        type="text"
                        className="form-control"
                        placeholder={__('Search')}
                        value={this.props.filter}
                    />
                </form>
                {children}
            </div>
        );
    }
};
Box.propTypes = {
    filter: React.PropTypes.string,
    library: React.PropTypes.instanceOf(Map).isRequired
};