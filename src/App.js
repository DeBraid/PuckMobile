import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    // const uri = 'https://puck-api-ixsjxyvvpl.now.sh/skaters';
    const uri = 'http://localhost:4730/skaters/';
    fetch(uri)
      .then((res) => {
        console.log('res', res);
        if (res.status >= 400) {
          throw new Error("Bad server");
        }
        return res.json();
      })
      .then((json) => {
        console.log('res json', json);
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
