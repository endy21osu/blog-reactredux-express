/** @jsx React.DOM */
'use strict'
var React = require('react')

var BlogPost = React.createClass({
  getInitialState: function() {
    return { text: ''};
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
  submitPost: function(e) {
    e.preventDefault();
    var text = this.state.text.trim();
    if (!text) {
      return;
    }

    var newpost = {
        "blogmsg" : text,
        "time" : event.timeStamp

    }

    $.post( "/blog/addpost", newpost,function( data ) {
      console.log("success");

    });
    this.setState({text: ''});

  },
  render: function() {
    return (
      <form className="blog-post" form="newPost">
        <p>Please Post About React</p>
        <textarea
          type="text"
          placeholder="enter your post"
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <button
          onClick={this.submitPost}
        >
        Submit
        </button>
      </form>
    );
  }
});

module.exports = BlogPost;
