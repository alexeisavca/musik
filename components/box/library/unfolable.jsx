var React = require('react');
var PureRenderComponent = require('../../pure-render-component');
module.exports = class extends PureRenderComponent {
        constructor(props){
        super(props);
        this.state = {
            unfolded: false
        }
    }

    toggleFolded (event){
        event.stopPropagation();
        this.setState({unfolded: !this.state.unfolded});
    }
};