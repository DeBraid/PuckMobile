import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

class MetricNavButtons extends Component {
  constructor(props){
    super(props);
    this.state = {
      metrics: [],
      metricsObj: {},
      statType: props.statType
    }
  }
  componentWillReceiveProps (nextProps) {
    let { metricsObj } = nextProps;
    this.setState({ metricsObj });
  }
  render() {
    let { metricsObj, statType } = this.state;
    let metrics = _.without(Object.keys(metricsObj), "name");
    return (
      <div>
        {metrics.map((met,key)=>{
          return (<button className="btn" type="button" key={key}>
            <Link 
              to={`skaters/${ statType }/${ met }`}
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
