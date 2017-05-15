import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
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
      <header className="navbar row">
        <div className="navbar__section col-xs-offset-2 col-xs-4">
          <Link to={`posts/${this.state.postNumber}`}>
            Go To Post:
          </Link>
          <input onChange={this.updatePostNumber} />
        </div>
        <div className="navbar__section col-xs-4">
          <Link to="/posts">All Posts</Link>
        </div>
      </header>
    );
  }
}

export default Header;
