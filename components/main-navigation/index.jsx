var React = require('react');
var __ = require('../../tools/translate');
var Item = require('./item');
var {List} = require('immutable');
require('./style');

module.exports = MainNavigation;
class MainNavigation extends React.Component{
    getCurrentItemSlug (){
        var {libraries, currentItem} = this.props;
        if(libraries.some(library => library.get('slug') == currentItem) || 'add-library' == currentItem){
            return currentItem;
        } else {
            return 'search';
        }
    }

    isActive(slug){ return slug == this.getCurrentItemSlug(); }

    render(){
        return (
            <div className="musik-main-navigation">
                <Item icon="search" slug="search" label={__('Search')} active={this.isActive('search')}/>
                {this.props.libraries.map(library => (
                    <Item
                        icon={library.get('icon')}
                        label={library.get('label')}
                        slug={library.get('slug')}
                        key={library.get('slug')}
                        active={this.isActive(library.get('slug'))}
                    />
                ))}
                <Item icon="plus" slug="add-library" label={__('Add a library')} active={this.isActive('add-library')}/>
            </div>
        )
    }
};
MainNavigation.propTypes = {
    libraries: React.PropTypes.instanceOf(List).isRequired,
    currentItem: React.PropTypes.string.isRequired
};