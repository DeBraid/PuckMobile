// Skaters
import React, { Component } from 'react';
import Chart from './Chart.js';

class Skaters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            params: props.params
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            params: nextProps.params
        })
    }
  render() {
    let { params } = this.state;
    return (
      <div className="Skaters">
        <h2>Skaters</h2>
        <Chart params={params} />
      </div>
    );
  }
}

export default Skaters;
