import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    console.log('APP props', props.params);
    this.state = {
      // season: props.season 
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Hello World from APP</h1>
        <Link to="skaters">Skaters</Link>
      </div>
    );
  }
}

export default App;
