import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import HeaderSegment from './HeaderSegment';

class HeaderContainer extends Component {
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
      <header className="row header">
        <HeaderSegment content="Quora" />
        <HeaderSegment content="Read" icon="file-text-o" />
        <HeaderSegment content="Answer" icon="pencil-square-o" />
        <HeaderSegment content="Notifications" icon="bell-o" />
        <HeaderSegment content="Ask Question" />
      </header>
    );
  }
}

export default HeaderContainer;
