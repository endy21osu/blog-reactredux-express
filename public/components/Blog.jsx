'use strict'
var React = require('react')
var Msg = require('./Msg')

var Blog = React.createClass({
   handleBlogChange: function(e) {
    BlogApp.getBlogPosts();
  },
  render: function() {
    var posts = this.props.data.map(function(post){
        return(
          <Msg id={post._id} time={post.time} msg={post.blogmsg} />
        );
      });
    return (
        <div className="blog"
          onChange={this.handleBlogChange}
        >
          <div className="intro">
            <h2>Blog Posts</h2>
          </div>
          {posts}
        </div>
    );
  }
});

module.exports = Blog
