/** @jsx React.DOM */
'use strict'
var React = require('react')

var Msg = React.createClass({
    deletePost: function(event) {
    $.ajax({
        url: "/blog/deletepost/" + this.props.id,
        type: 'DELETE'
    });
  },
  render: function() {

    var time = this.props.time;

    return (
          <div className="blog-container">
            <div className="blog-box">
              <p>{this.props.msg}</p>
              <span>{time}</span>
              <button
                   onClick={this.deletePost}
                >Delete</button>
            </div>
          </div>
    );
  }
});

module.exports = Msg;
