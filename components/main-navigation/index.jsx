var React = require('react');
var __ = require('../../tools/translate');
module.exports = class extends React.Component{
    render(){
        return (
            <ul className="nav nav-pills nav-stacked">
                <li>
                    <a href="javascript:void(0);">
                        <i className="glyphicon glyphicon-music"></i>
                        &nbsp;
                        {__('Music')}
                    </a>
                </li>
            </ul>
        )
    }
};