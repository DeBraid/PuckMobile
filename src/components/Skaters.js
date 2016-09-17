// Skaters
import React, { Component } from 'react';
import { Link } from 'react-router';
import Chart from './Chart.js';
import StatTypePrompt from './StatTypePrompt.js';

class Skaters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            params: props.params
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            params: nextProps.params
        })
    }
  render() {
    let { params } = this.state;
    let { metric, statType } = params;
    let content = () => {
        if (!metric || !statType) {
            return <StatTypePrompt />
        } else {
            return <Chart params={params} />
        }
    }
    return (
        <div className="Skaters">
            <h2><Link to="skaters">Skaters</Link></h2>
            { content() }
        </div>
    );
  }
}

export default Skaters;
