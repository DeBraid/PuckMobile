import React, { Component } from 'react';
import Chart from './Chart';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    console.log('props', props.params);
    this.state = {
      // season: props.season 
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
