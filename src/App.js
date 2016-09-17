import React, { Component } from 'react';
import Chart from './Chart';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    console.log('props', props);
    this.state = {
    }
  }
  render() {
    return (
      <div className="App">
        <Chart />
      </div>
    );
  }
}

export default App;
