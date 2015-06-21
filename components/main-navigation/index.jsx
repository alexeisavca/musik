var React = require('react');
var __ = require('../../tools/translate');
var Item = require('./item');
require('./style');

module.exports = MainNavigatio;
class MainNavigation extends React.Component{
    render(){
        return (
            <div className="musik-main-navigation">
                {this.props.libraries.map((library, key) => (
                    <Item
                        icon={library.get('icon')}
                        label={library.get('label')}
                        key={key}
                        active={key == this.props.currentLibrary}
                    />
                ))}
                <Item icon="plus" label={__('Add a library')}/>
            </div>
        )
    }
};
MainNavigation.propTypes = {

}