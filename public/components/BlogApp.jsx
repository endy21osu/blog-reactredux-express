
'use strict'
var React = require('react')
var Head = require('./Head')
var Blog = require('./Blog')
var BlogPost = require('./BlogPost')
var Stats = require('./Stats')

var BlogApp = React.createClass({
  getBlogPosts: function() {
    $.get( "/blog/posts", function( data ) {
      this.setState({data: data});
      console.log(this);
    }.bind(this));
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.getBlogPosts();
    //console.log("in mount where is this called?");
    setInterval(this.getBlogPosts, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="container cf">
        <Head />
        <Stats data={this.state.data} />
        <Blog data={this.state.data} />
        <BlogPost />
      </div>
    );
  }
});

module.exports = BlogApp
