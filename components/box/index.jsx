var React = require('react');
var __ = require('../../tools/translate');
var {Map} = require('immutable');
require('./style');
module.exports = Box;
class Box extends React.Component {
    updateBoxFilter (e){
        this.props.setBoxFilter(e.target.value);
    }

    getFilterForm (){
        return (
            <form>
                <input
                    type="text"
                    className="form-control"
                    placeholder={__('Search')}
                    value={this.props.filter}
                    onChange={this.updateBoxFilter.bind(this)}
                />
            </form>
        )
    }

    wrap (children){
        return (
            <div className="col-md-2 col-sm-5 musik-main-navigation-box">
                {this.getFilterForm()}
                {children}
            </div>
        );
    }
}
Box.propTypes = {
    filter: React.PropTypes.string,
    setBoxFilter: React.PropTypes.func.isRequired,
    library: React.PropTypes.instanceOf(Map).isRequired
};