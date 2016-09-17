import React, { Component } from 'react';
import fetchTopTenByMetric from './../helpers/fetchTopTenByMetric.js';
import topTenByMetric from './../helpers/topTenByMetric.js';
import ListOfSkaters from './ListOfSkaters.js';
import MetricNavButtons from './MetricNavButtons.js';

class Chart extends Component {
  constructor(props){
    super(props);
    let skaters = { top: [], bottom: [], all: [] };
    let { statType, metric } = props.params;
    this.state = {
      statType, 
      metric,
      skaters,
      uri : `http://localhost:4730/skaters/${ statType }`,
      // uri : `https://puck-api-aizjumxpky.now.sh/skaters/${ statType }`,
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
  componentWillReceiveProps(nextProps, nextState) {
    // console.log('nextProps', nextProps);
    const sk = this.state.skaters.all;
    const {metric} = nextProps.params
    this.setState({
      skaters: topTenByMetric(sk, metric),
      metric
    })
  }
  render() {
    let { skaters, metric } = this.state;
    let { top, bottom } = skaters;
    return (
      <div>
        <div className="App-header">
          <h2>Charts for {metric} </h2>
          <MetricNavButtons metricsObj={top[0]} />
        </div>
        <div className="container">
          <div className="left">
            <ListOfSkaters list={ top } title={"Top"} metric={metric}/>
          </div>
          <div className="right">
            <ListOfSkaters list={ bottom } title={"Bottom"} metric={metric}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Chart;