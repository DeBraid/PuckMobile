import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import logo from './logo.svg';
import throwOrJSON from './throwOrJSON.js';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      uri : 'https://puck-api-jfmzaowrqs.now.sh/skaters/goals',
      errorHandler: throwOrJSON
    }
  }
  componentDidMount() {
    let { uri, errorHandler } = this.state;
    fetch(uri)
      .then(errorHandler)
      .then((data)=>{
        console.log('goals', data);
      })
      .catch(function (err) {
          console.log('fetch failed...', err);
      });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
