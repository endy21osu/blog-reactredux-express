/** @jsx React.Dom */

'use strict'

require("./css/blog.css");
var React = require('react')
var BlogApp = require('./components/BlogApp')

React.render(
  <BlogApp pollInterval={100} />,
  document.getElementById('app')
);

//export default BlogApp;
