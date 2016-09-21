import React, { Component } from 'react';
import Link from 'react-router/lib/Link';
import Icon from './logo-icon.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> 
            Welcome to PuckMobile
            <img src={Icon} alt="Homepage Logo" style={{ marginLeft: '0.5em' }}/>
        </h1>
        <Link to="skaters">Skaters</Link>
      </div>
    );
  }
}

export default App;
