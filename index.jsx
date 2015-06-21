var React = require('react');
var __ = require('./tools/translate');
var MainNavigation = require("./components/main-navigation");
var Playlist = require('./components/playlist');
var Library = require('./components/placeholder')('library');
module.exports = Musik;
class Musik extends React.Component{
    render(){
        return (
            <div className="row">
                <div className="col-md-1 col-sm-1">
                    <MainNavigation libraries={this.props.libraries} currentItem={this.props.currentMainNavigationItem}/>
                </div>
                <div className="col-md-2 col-sm-5">
                    <Library/>
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