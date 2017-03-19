import React, { Component } from 'react';

class List extends Component {

  BuildVideoList() {
    return this.props.videos.map( video => {
      return <li> { video.title } </li>
    })
  }

  render() {
    return (
      <ul className="List">
        { this.BuildVideoList() }
      </ul>
    );
  }
}

export default List;
