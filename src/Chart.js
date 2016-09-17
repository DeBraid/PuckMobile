import React, { Component } from 'react';
import { Link } from 'react-router';
import fetchTopTenByMetric from './fetchTopTenByMetric.js';
import topTenByMetric from './topTenByMetric.js';
import ListOfSkaters from './ListOfSkaters.js';

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
    let { skaters, metric, statType } = this.state;
    let { top, bottom } = skaters;
    let metrics = [];
    if (top && top[0]) {
      metrics = Object.keys(top[0]);
    }
    
    if (!metric) {
      return (<h2> Pick a metric like 
        <Link to="skaters/corsi/CF">Corsi For (CF) </Link> or,
        <Link to="skaters/corsi/CF60">Corsi For p60 (CF60)</Link>.
      </h2>);
    } else {
      return (
        <div>
          <div className="App-header">
            <h2>Charts for {metric} </h2>
            {metrics.map((met,key)=>{
              return (<button className="btn" type="button" key={key}>
                <Link 
                  to={`skaters/corsi/${ met }`}
                  style={{textDecoration: "none", color: "white"}}>
                  {met}
                </Link>
              </button>);
            })}
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
}

export default Chart;