// __test__/Head-test.js
jest.dontMock('../components/Msg.jsx');

describe('Msg', function() {

  var React = require('react');
  var ReactDOM = require('react-dom');
  var Msg = require('../components/Msg.jsx');
  var TestUtils = require('react-addons-test-utils');

  describe('renders', function() {
    it('should have rendered a blog message.', function() {
      var msg = TestUtils.renderIntoDocument(<Msg id='56c46db73bc36d7c22a406da' time='1455713718847' msg='this is a message.' />);

      expect(TestUtils.isCompositeComponent(msg)).toBeTruthy();

      msg = TestUtils.findRenderedDOMComponentWithTag(msg, 'p');
      expect(ReactDOM.findDOMNode(msg).textContent).toBe('this is a message.');
    });
  });
});
