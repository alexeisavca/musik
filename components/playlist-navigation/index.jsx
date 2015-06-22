var React = require('react');
module.exports = PlaylistNavigation;
class PlaylistNavigation extends React.Component {
    render() {
        return (
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
        )
    }
}

PlaylistNavigation.propTypes = {

};