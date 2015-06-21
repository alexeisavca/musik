var React = require('react');
var __ = require('./tools/translate');
var MainNavigation = require("./components/main-navigation");
var Playlist = require('./components/playlist');
var SearchBox = require('./components/box/search');
var AddLibraryBox = require('./components/placeholder')('add library box');
var LibraryBox = require('./components/placeholder')('library box');
module.exports = Musik;
class Musik extends React.Component{
    getMainNavigationBox(){
        if(this.props.libraries.some(library => library.get('slug') == this.props.currentMainNavigationItem)){
            return <LibraryBox/>;
        } else if('add-library' == this.props.currentMainNavigationItem){
            return <AddLibraryBox/>;
        } else {
            return <SearchBox/>
        }
    }

    render(){
        return (
            <div className="row">
                <MainNavigation libraries={this.props.libraries} currentItem={this.props.currentMainNavigationItem}/>
                {this.getMainNavigationBox()}
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