import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import throwOrJSON from './throwOrJSON.js';
import topTen from './topTen.js';

class Chart extends Component {
  constructor(){
    super();
    this.state = {
      data: {},
      uri : 'https://puck-api-jfmzaowrqs.now.sh/skaters/goals',
      errorHandler: throwOrJSON
    }
  }
  componentDidMount() {
    let { uri, errorHandler } = this.state;
    let metric = 'GFPct';
    const data = fetch(uri)
      .then(errorHandler)
      .then((foo)=>{
        console.log('foo.data[0]', foo.data[0]);
        return topTen(foo.data, metric, 1)
      })
      .then((data)=>{
        data.map((item)=>{
          console.log('name', item.name);
          console.log(metric, item[metric]);
        })
      })
      .catch(function (err) {
          console.log('fetch failed...', err);
      });

    this.setState({
      data: data
    })
  }
  render() {
    return (
      <div className="App-header">
        <h2>Charts</h2>

      </div>
    );
  }
}

export default Chart;