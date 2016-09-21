import React, { Component } from 'react';
import Link from 'react-router/lib/Link';
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
    const btnStyle = {textDecoration: "none", color: "white"};
    return (
      <div className="horz-scroll">
        { metrics.map((met,key)=>{
          let href = `skaters/${ statType }/${ met }`;
          return (
            <button className="btn" type="button" key={key}>
              <Link to={href} style={btnStyle}>{met}</Link>
            </button>
          );
        })}
      </div>
    );
  }
}

export default MetricNavButtons;
