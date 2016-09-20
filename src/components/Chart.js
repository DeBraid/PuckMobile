import React, { Component } from 'react';
import fetchTopTenByMetric from './../helpers/fetchTopTenByMetric.js';
import topTenByMetric from './../helpers/topTenByMetric.js';
import K from './../AppConstants.js';
import ListOfSkaters from './ListOfSkaters.js';
import MetricNavButtons from './MetricNavButtons.js';

class Chart extends Component {
  constructor(props){
    super(props);
    let skaters = { top: [], bottom: [], all: [] };
    let { statType, metric } = props.params;
    let uri = K.uri + statType;
    this.state = {
      statType, 
      metric,
      skaters,
      uri
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
    let { skaters, metric, statType } = this.state;
    let { top, bottom } = skaters;
    return (
      <div>
          <MetricNavButtons 
            metricsObj={top[0]} 
            statType={ statType }
          />
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