var React = require('react');
var PureRenderComponent = require('../pure-render-component');
var __ = require('../../tools/translate');
var Item = require('./item');
var {List} = require('immutable');
require('./style');

module.exports = MainNavigation;
class MainNavigation extends PureRenderComponent{
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
            <div className="col-md-1 col-sm-1 musik-main-navigation">
                <Item
                    icon="search"
                    slug="search"
                    label={__('Search')}
                    active={this.isActive('search')}
                    setMainNavigation={this.props.setMainNavigation}
                />
                {this.props.libraries.map(library => {
                    var slug = library.get('slug');
                    return (
                        <Item
                            icon={library.get('icon')}
                            label={library.get('label')}
                            slug={slug}
                            key={slug}
                            active={this.isActive(slug)}
                            setMainNavigation={this.props.setMainNavigation}
                        />
                    )
                })}
                <Item
                    icon="plus"
                    slug="add-library"
                    label={__('Add a library')}
                    active={this.isActive('add-library')}
                    setMainNavigation={this.props.setMainNavigation}
                />
                <div className="stretcher"/>
            </div>
        )
    }
}
MainNavigation.propTypes = {
    libraries: React.PropTypes.instanceOf(List).isRequired,
    currentItem: React.PropTypes.string.isRequired,
    setMainNavigation: React.PropTypes.func.isRequired
};