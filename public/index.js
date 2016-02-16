

var BlogApp = React.createClass({
  getBlogPosts: function() {
    $.get( "/blog/posts", function( data ) {
      this.setState({data: data});
    }.bind(this));
  },
  componentDidMount: function() {
    this.getBlogPosts();
    setInterval(this.getBlogPosts, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="container cf">
        <Head />
        <Stats  />
        <Blog  />
        <BlogPost />
      </div>
    );
  }
});

var Msg = React.createClass({
  render: function() {
    return (
          <div className="blog-container">
            <div className="blog-box">
              <p>This would be the blog message</p>
              <span>the date 2/23 At 4:30 pm</span>
              <button
                   onClick={this.getBlogPosts}
                >Delete</button>
            </div>
          </div>
    );
  }
});

var Blog = React.createClass({
  render: function() {
    return (
        <div className="blog">
          <div className="intro">
            <h2>Blog Posts</h2>
          </div>  
          <Msg />          
        </div>
    );
  }
});

var BlogPost = React.createClass({
  render: function() {
    return (
      <form className="blog-post" form="newPost" onSubmit={this.submitPost}>
        <p>Please Post About React</p>
        <textarea
          type="text"
          placeholder="enter your post"
          value="this.state.author"
        />
        <button
        >
        Submit
        </button>
      </form>
    );
  }
});

var Stats = React.createClass({
  render: function() {
    return (
        <div className="stats">
          <p>
            blog: meta data
            newpost: <br />post text
          </p>
        </div>
    );
  }
});


var Head = React.createClass({
  render: function() {
    return (
        <div className="intro">
          <h1>Hello Bloggers! Please comment on what you think of reactjs!</h1>
        </div>  
    );
  }
});

ReactDOM.render(
  <BlogApp pollInterval={10000} />,
  document.getElementById('app')
);
