// __test__/BlogPost-test.js
jest.dontMock('../components/BlogPost.jsx');

describe('BlogPost', function() {

  var React = require('react');
  var ReactDOM = require('react-dom');
  var BlogPost = require('../components/BlogPost.jsx');
  var TestUtils = require('react-addons-test-utils');

  describe('render', function() {
    it('should have rendered with a submit button', function() {
        var blogPost = TestUtils.renderIntoDocument(<BlogPost />);

        var blogPostNode = ReactDOM.findDOMNode(blogPost);

        expect(blogPostNode.textContent).not.toBe('');

        blogPost = TestUtils.findRenderedDOMComponentWithTag(blogPost, 'button');
        expect(blogPost.textContent).toEqual('Submit');


    });
  });


});
