import React, { Component } from 'react';
import fetch from 'node-fetch'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    fetch('http://localhost:4730/skaters/')
    .then(function (res) {
      console.log(res.status)
      console.log(res.statusText)
      return res.json();
    })
    .then((res)=>{
      console.log('res', res);
    })
    .catch(function (err) {
        console.log('// API call failed...', err);
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
