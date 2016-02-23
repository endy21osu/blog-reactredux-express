// __test__/Head-test.js
jest.dontMock('../components/Head.jsx');



describe('Head', function() {

  var React = require('react');
  var ReactDOM = require('react-dom');
  var Head = require('../components/Head.jsx');
  var TestUtils = require('react-addons-test-utils');

  describe('renders', function() {
    it('should have a text talking about React and express', function() {
      var head = TestUtils.renderIntoDocument(<Head />);

      expect(TestUtils.isCompositeComponent(head)).toBeTruthy();
      expect(ReactDOM.findDOMNode(head).textContent).not.toBe('');
    });
  });
});
