import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  constructor() {
    super();

    this.state = {
      postNumber: '',
    };

    this.updatePostNumber = this.updatePostNumber.bind(this);
  }


  updatePostNumber(e) {
    this.setState({
      postNumber: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <Link to={`posts/${this.state.postNumber}`}>
          Go To Post:
        </Link>
        <input onChange={this.updatePostNumber} />
        <Link to="/posts">All Posts</Link>
      </div>
    );
  }
}

export default Nav;
