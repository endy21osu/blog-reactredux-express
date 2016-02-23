
'use strict'
var React = require('react')
var StatMsg = require('./StatMsg')

var Stats = React.createClass({
  render: function() {
     var posts = this.props.data.map(function(post){
        return(
          <StatMsg id={post._id} blogmsg={post.blogmsg} time={post.time} />
        );
      });

    return (
        <div className="stats">
          {posts}
          <p>
            newpost: <br />post text
          </p>
        </div>
    );
  }
});


module.exports = Stats;
