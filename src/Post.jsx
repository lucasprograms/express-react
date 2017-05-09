import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Post extends Component {
  static propTypes = {
    match: PropTypes.shape({ params: PropTypes.shape({ number: PropTypes.string }) }).isRequired,
  }

  state = {
    title: '',
  }

  componentDidMount() {
    const that = this;
    async function getPost(id) {
      const data = await fetch(`/api/posts/${id}`);
      const post = await data.json();
      that.setState({ title: post.title });
    }

    getPost(this.props.match.params.number);
  }

  render() {
    return (
      <div>POST: {this.state.title}</div>
    );
  }
}

export default Post;
