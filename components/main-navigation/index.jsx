var React = require('react');
var __ = require('../../tools/translate');
var Item = require('./item');

module.exports = class extends React.Component{
    render(){
        return (
            <div className="list-group musik-main-navigation">
                <Item icon="music" label={__('Music')}/>
                <Item icon="book" label={__('Audio books')}/>
                <Item icon="education" label={__('Audio lessons')}/>
                <Item icon="plus" label={__('Add a library')}/>
            </div>
        )
    }
};