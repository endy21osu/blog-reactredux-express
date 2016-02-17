

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
    console.log("in mount where is this called?");
     console.log(this);
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

var Msg = React.createClass({
  render: function() {
    return (
          <div className="blog-container">
            <div className="blog-box">
              <p>{this.props.msg}</p>
              <span>{this.props.time}</span>
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
    console.log("in blog componet");
    console.log(this);
    var posts = this.props.data.map(function(post){
        return(
          <Msg time={post.time} msg={post.blogmsg} />
        );
      });
    return (
        <div className="blog">
          <div className="intro">
            <h2>Blog Posts</h2>
          </div>  
          {posts}          
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


var StatMsg = React.createClass({
  render: function() {
    return (
      <span>{this.props.ref} : {this.props.time} : {this.props.blogmsg}</span>
    );
  }
});

var Stats = React.createClass({
  render: function() { 
    console.log("in stats");
    console.log(this);
     var posts = this.props.data.map(function(post){
       console.log(post);
        return(
          <StatMsg ref={post._id} blogmsg={post.blogmsg} time={post.time} />
        );
      });
      console.log(posts)
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
