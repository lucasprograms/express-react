import React, { Component } from 'react';
import request from 'browser-request';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      postContents: '',
    };

    this.updateCurrentPost = this.updateCurrentPost.bind(this);
    this.submitPost = this.submitPost.bind(this);
  }

  submitPost(evt) {
    evt.preventDefault();

    const onResponse = (er, response, body) => {
      console.log(body);
    };

    request({ method: 'POST', url: '/api/posts', body: '{"relaxed":true}', json: true }, onResponse);
  }

  updateCurrentPost(evt) {
    this.setState({
      postContents: evt.target.value,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitPost}>
          <input onChange={this.updateCurrentPost} />
        </form>
      </div>
    );
  }
}

export default Home;
