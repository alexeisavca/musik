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

    maybeFilterTracks (tracks){
        var {filter} = this.props;
        if("string" != typeof filter || filter.length < 1){
            return tracks;
        } else {
            filter = filter.toLowerCase().trim();
            //filter those tracks
            return tracks.filter(track =>
                //that have string properties
                track.valueSeq().filter(value => "string" == typeof value)
                //which, when lowercase
                .map(string => string.toLowerCase())
                //contain the filter
                .some(value => value.indexOf(filter) > -1)
            )
        }
    }

    render () {
        var {tracks} = this.props;
        return this.wrap(
            this.getFilterForm(),
            this.maybeFilterTracks(tracks).map(track => track.get('title'))
        )
    }
}

LibraryBox.propTypes = {
    filter: React.PropTypes.string,
    setBoxFilter: React.PropTypes.func.isRequired,
    tracks: React.PropTypes.instanceOf(List).isRequired
};