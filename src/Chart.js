import React, { Component } from 'react';
import fetchTopTenByMetric from './fetchTopTenByMetric.js';

class Chart extends Component {
  constructor(){
    super();
    this.state = {
      skaters: [],
      // uri : 'localhost:/skaters/corsi',
      uri : 'https://puck-api-aizjumxpky.now.sh/skaters/goals',
      metric : 'GFPct',
      styles: {
        textAlign: 'left',
        marginLeft: '10px'
      }
    }
  }
  componentDidMount() {
    let { uri, metric } = this.state;
    fetchTopTenByMetric(uri, metric)
      .then((resp)=>{
        this.setState({
          skaters: resp
        })
      });
  }
  render() {
    let { skaters, metric, styles } = this.state;
    console.log('skaters in render',skaters);
    return (
      <div>
        <div className="App-header">
          <h2>Charts for {metric} </h2>
        </div>
        <div style={styles}>
          {skaters.map((skater,key,)=>{
            return (<p key={key}>
              {key+1}. {skater.name}: {skater[metric]} 
            </p>)
          })}
        </div>
      </div>
    );
  }
}

export default Chart;