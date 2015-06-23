var React = require('react');
var Box = require('./index');
var __ = require('../../tools/translate');
var {List} = require('immutable');
module.exports = LibraryBox;
class LibraryBox extends Box {
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

    render () {
        var {filter} = this.props;
        return this.wrap(
            this.getFilterForm(),
            this.props.tracks.filter(track => ("string" != typeof filter || filter.length < 1) || track.valueSeq()
                .filter(value => "string" == typeof value)
                .map(string => string.toLowerCase())
                .some(value => value.indexOf(filter) > -1)
            ).map(track => track.get('title'))
        )
    }
}

LibraryBox.propTypes = {
    filter: React.PropTypes.string,
    setBoxFilter: React.PropTypes.func.isRequired,
    tracks: React.PropTypes.instanceOf(List).isRequired
};