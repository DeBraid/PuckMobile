import React, { Component } from 'react';
import { Link } from 'react-router';

class MetricNavButtons extends Component {
  constructor(props){
    super(props);
    this.state = {
      metrics: [],
      metricsObj: {}
    }
  }
  componentWillReceiveProps (nextProps) {
    let { metricsObj } = nextProps;
    this.setState({
      metricsObj
    })
  }
  render() {
    let metrics = _.without(Object.keys(this.state.metricsObj), "name");
    return (
      <div>
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
    );
  }
}

export default MetricNavButtons;
