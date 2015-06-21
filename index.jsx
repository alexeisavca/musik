var React = require('react');
var __ = require('./tools/translate');
var MainNavigation = require("./components/main-navigation");
var Playlist = require('./components/playlist');
module.exports = Musik;
class Musik extends React.Component{
    render(){
        return (
            <div className="row">
                <div className="col-md-1 col-sm-1">
                    <MainNavigation libraries={this.props.libraries} currentLibrary={this.props.currentLibrary}/>
                </div>
                <div className="col-md-2 col-sm-5">
                    here be library
                </div>
                <div className="col-md-9 col-sm-6">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="nav nav-tabs">
                                <li>&nbsp;</li>
                                <li className="active">
                                    <a href="#">Playlist #1</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <i className="glyphicon glyphicon-plus"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-12">
                            <Playlist/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
Musik.propTypes = {

};
var {List, Map} = require('immutable');
var libraries = List([
    Map({
        label: 'Music',
        icon: 'music'
    }),
    Map({
        label: 'Audio books',
        icon: 'book'
    }),
    Map({
        label: 'Audio lessons',
        icon: 'education'
    })
]);

React.render(
    <module.exports
        libraries={libraries}
        currentLibrary={0}
        />, document.getElementById('the-container'));