
'use strict'

require("./css/blog.css");
var React = require('react')
var BlogApp = require('./components/BlogApp')

React.render(
  <BlogApp pollInterval={5000} />,
  document.getElementById('app')
);

//export default BlogApp;
