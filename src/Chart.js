import React, { Component } from 'react';
import fetchTopTenByMetric from './fetchTopTenByMetric.js';

class Chart extends Component {
  constructor(){
    super();
    this.state = {
      data: {},
      // uri : 'localhost:/skaters/corsi',
      uri : 'https://puck-api-aizjumxpky.now.sh/skaters/goals',
      metric : 'GFPct'
    }
  }
  componentDidMount() {
    let { uri, metric } = this.state;
    fetchTopTenByMetric(uri, metric)
      .then((resp)=>{
        this.setState({
          data: resp
        })
      });
  }
  render() {
    console.log('render data', this.state.data);
    return (
      <div className="App-header">
        <h2>Charts</h2>

      </div>
    );
  }
}

export default Chart;