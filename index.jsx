var React = require('react');
var __ = require('./tools/translate');
module.exports = Musik;
class Musik extends React.Component{
    render(){
        return (
            <div className="row">
                <div className="col-md-1 col-sm-1">
                    <ul className="nav nav-pills nav-stacked">
                        <li>
                            <a href="javascript:void(0);">
                                <i className="glyphicon glyphicon-music"></i>
                                &nbsp;
                                {__('Music')}
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-2 col-sm-5">
                    here be library
                </div>
                <div className="col-md-9 col-sm-6">
                    <div className="row">
                        <ul className="nav nav-tabs">
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
                    <div className="row">
                        <ul className="list-group">
                            <li className="list-group-item">Cras justo odio</li>
                            <li className="list-group-item">Dapibus ac facilisis in</li>
                            <li className="list-group-item">Morbi leo risus</li>
                            <li className="list-group-item">Porta ac consectetur ac</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}