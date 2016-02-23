
'use strict'
var React = require('react')

var StatMsg = React.createClass({
  render: function() {
    return (
      <p>{this.props.id} : {this.props.time} : {this.props.blogmsg}</p>
    );
  }
});

module.exports = StatMsg;
