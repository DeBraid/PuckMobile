// Breadcrumbs
import React, { Component } from 'react';
import Link from 'react-router/lib/Link';
import Icon from './../logo-icon.png';

class Breadcrumbs extends Component {
  render() {
    let { section, statType, metric } = this.props.params;
    let crumbs = () => {
        if ( statType && metric ) {
            return `> ${statType} > ${metric}`; 
        }
    }
    return (
        <div style={{ textTransform: 'capitalize' }}>
            <h3>
                <Link to="/"><img src={Icon} alt="Homepage Logo" /></Link> > <Link to={section}>{section}</Link> { crumbs() }
            </h3>
        </div>
    );
  }
}

export default Breadcrumbs;