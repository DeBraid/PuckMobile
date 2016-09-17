import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import throwOrJSON from './throwOrJSON.js';

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
    const data = fetch(uri)
      .then(errorHandler)
      .then((data)=>{
        console.log('data', data);
        return data;
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