// StatTypePrompt
import React, { Component } from 'react';
import { Link } from 'react-router';

class StatTypePrompt extends Component {
  render() {
    return (
        <h2> Pick a metric like 
            <Link to={`skaters/goals/GF`}> Goals For </Link> or,
            <Link to={`skaters/corsi/CF`}> Corsi For </Link>.
        </h2>
    );
  }
}

export default StatTypePrompt;
