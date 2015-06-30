jest.dontMock('../playlist');
describe("Playlist", function(){
    it("should call back when tab becomes active", function(){
        var cb = jest.genMockFunction();
        var index = Math.floor(Math.random() *Number.MAX_VALUE);
        var React = require('react');
        var {TestUtils} = React.addons;
        var Tab = require("../playlist");
        var tab = TestUtils.renderIntoDocument(<Tab index={index} setCurrentPlaylist={cb}/>);
        TestUtils.Simulate.click(tab);
        expect(cb).toHaveBeenCalledWith(index);
    })
});