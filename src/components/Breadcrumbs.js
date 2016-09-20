// Breadcrumbs
import React, { Component } from 'react';
import { Link } from 'react-router';
import HomeIcon from './../home-icon.svg';

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
                <Link to="/">
                    <img src={ HomeIcon } style={{ maxHeight: '20px', padding: '3px 0 0 5px'}}/>
                </Link> > <Link to={section}>{section}</Link> { crumbs() }
            </h3>
        </div>
    );
  }
}

export default Breadcrumbs;