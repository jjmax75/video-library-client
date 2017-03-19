import React, { Component } from 'react';
import './App.css';
import List from './jsx/List';

class App extends Component {

  state = { videos: [] }

  /**
  * get all the videos
  */
  GetVideoData() {
    fetch( 'http://localhost:8080/api/videos', {
      method: 'get',
      headers: {
        "Accept": "application/text"
      }
    })
    .then( response => response.json() )
    .then( response => {

      console.info( 'videos retrieved' );
      console.log(response);

      this.setState({
        videos: response
      });

    }).catch( error => {

      console.error( 'something went wrong' );
      console.log( error );

    })
  }

  componentDidMount() {
    this.GetVideoData();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Video Library</h1>
        </div>
        <p className="App-intro">
          Select a video to view
        </p>
        <List videos={ this.state.videos } />
      </div>
    );
  }
}

export default App;
