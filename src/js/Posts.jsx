import React, { Component } from 'react';

class Post extends Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    const that = this;
    async function getPosts() {
      const data = await fetch('/api/posts/');
      const posts = await data.json();
      that.setState({ posts });
    }

    getPosts();
  }

  render() {
    return (
      <ul>
        {this.state.posts.map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
    );
  }
}

export default Post;
