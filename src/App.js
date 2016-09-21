import React, { Component } from 'react';
import Link from 'react-router/lib/Link';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to PuckMobile</h1>
        <Link to="skaters">Skaters</Link>
      </div>
    );
  }
}

export default App;
