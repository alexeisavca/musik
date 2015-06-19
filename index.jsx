var React = require('react');
module.exports = Musik;
class Musik extends React.Component{
    render(){
        return (
            <h1>here be MusiK</h1>
        )
    }
}

React.render(<Musik/>, document.getElementById('the-container'));