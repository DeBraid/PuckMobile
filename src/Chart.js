import React, { Component } from 'react';
import fetchTopTenByMetric from './fetchTopTenByMetric.js';
import topTenByMetric from './topTenByMetric.js';

class Chart extends Component {
  constructor(props){
    super(props);
    let { statType, metric } = props.params; 
    this.state = {
      skaters: {
        top: [],
        bottom: [],
        all: [],
      },
      uri : `http://localhost:4730/skaters/${ statType }`,
      // uri : `https://puck-api-aizjumxpky.now.sh/skaters/${ props.statType }`,
      metric : metric,
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
  componentWillReceiveProps(nextProps, nextState) {
    console.log('nextProps', nextProps);
    const sk = this.state.skaters.all;
    const {metric} = nextProps.params
    this.setState({
      skaters: topTenByMetric(sk, metric),
      metric
    })
  }
  render() {
    let { skaters, metric, styles } = this.state;
    let { top, bottom } = skaters;
    return (
        <div>
          <div className="App-header">
            <h2>Charts for {metric} </h2>
          </div>
          <div style={styles}>
            <h3>Top</h3>
            {top.map((skater,key,)=>{
              return (<p key={key}>
                {key+1}. {skater.name}: {skater[metric]} 
              </p>)
            })}
          </div>
          <div style={styles}>
            <h3>Bottom</h3>
            {bottom.map((skater,key,)=>{
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