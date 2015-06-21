var React = require('react');
module.exports = function(name){
    return class extends React.Component{
        render(){
            return (
                <span>Implement {name}</span>
            )
        }
    }
};